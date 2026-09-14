# syntax=docker/dockerfile:1

# ---- Build stage ----
FROM node:22-alpine AS build

WORKDIR /app

# Install dependencies first for better layer caching
COPY package.json package-lock.json ./
COPY apps/web/package.json ./apps/web/package.json

RUN npm ci

# Copy the rest of the source
COPY . .

# Build the static site (outputs to /app/dist/apps/web)
RUN npm run build

# ---- Serve stage ----
FROM nginx:1.27-alpine AS serve

# Remove default nginx config and static site
RUN rm -rf /usr/share/nginx/html/* /etc/nginx/conf.d/default.conf

# Copy built static assets
COPY --from=build /app/dist/apps/web /usr/share/nginx/html

# Custom nginx config with SPA fallback
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
