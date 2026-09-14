# Despliegue en Coolify

Este repositorio ha sido optimizado y limpiado para desplegarse de manera directa y ultraligera en Coolify mediante Docker y Nginx.

## Pasos para desplegar en Coolify:

1. **Conectar el repositorio en Coolify**
   - En Coolify → **Projects** → selecciona tu proyecto/entorno.
   - Haz clic en **+ New Resource** → **Private/Public Repository (GitHub App o URL de Git)**.
   - Selecciona el repositorio `djcoraanco/dylan_docker` y la rama `main`.

2. **Configuración del Build**
   - **Build Pack / Method**: `Dockerfile`
   - **Dockerfile Path**: `Dockerfile`
   - **Build Context**: `.`
   - No requiere build args adicionales.

3. **Puerto y Networking**
   - **Port**: `80` (el contenedor Nginx expone el puerto 80 con compresión gzip, cabeceras de caché inmutable para `/assets/` y redirección SPA a `index.html`).

4. **Variables de Entorno**
   - No son necesarias para la compilación estática. Si en el futuro agregas variables públicas para Vite, defínelas con el prefijo `VITE_`.

5. **Dominio y Certificados SSL**
   - En la sección **Domains** de Coolify, introduce tu dominio o subdominio (ej. `https://dylanmazzei.com`) y Coolify generará automáticamente los certificados SSL gratuitos con Let's Encrypt.

6. **Auto-Deploy**
   - Activa **Auto Deploy** en la configuración de Git en Coolify para que cada `git push` a `main` reconstruya y despliegue el contenedor automáticamente.

---

### Optimizaciones incluidas:
- **Build en 2 etapas (Multi-stage Dockerfile)**:
  - Etapa 1 (`node:22-bullseye-slim`): Compila la aplicación con Vite y genera los assets en `/app/dist`.
  - Etapa 2 (`nginx:1.27-alpine`): Imagen de producción mínima (~25MB) que sirve únicamente los archivos estáticos compilados.
- **Nginx optimizado (`nginx.conf`)**:
  - Regla SPA fallback: `try_files $uri $uri/ /index.html;` para que todas las rutas de React Router funcionen sin errores 404 al recargar la página.
  - Compresión Gzip activada para JS, CSS, HTML, JSON y fuentes.
  - Caché inmutable de 1 año para archivos estáticos con hash (`/assets/*`).
  - Cabeceras de seguridad (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`).
