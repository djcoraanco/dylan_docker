# Guía de Despliegue Estático (Coolify & GitHub Pages)

El proyecto es **100% estático** (React SPA compilado con Vite). Al ejecutar `npm run build`, se generan todos los archivos HTML, CSS, JS, assets y mapas de ruta en la carpeta `/dist`.

Cada ruta (`/about`, `/consulting`, `/portfolio`, etc.) cuenta con su propio archivo `index.html` estático y se incluye un `404.html` y `.nojekyll` para que funcione directamente en cualquier servidor estático sin requerir configuración especial de servidor.

---

## Opción 1: Despliegue en GitHub Pages (Automático y Gratuito)

Se ha configurado un workflow de GitHub Actions en `.github/workflows/deploy-pages.yml`.

1. **Subir cambios a GitHub**:
   - Haz commit y push de los cambios a la rama `main` de tu repositorio `djcoraanco/dylan_docker`.
2. **Activar GitHub Pages en el repositorio**:
   - En GitHub, ve a **Settings** → **Pages**.
   - En **Build and deployment** → **Source**, selecciona **GitHub Actions**.
3. **¡Listo!**:
   - En cada push a `main`, GitHub compilará el sitio y lo publicará automáticamente en tu URL de GitHub Pages (o en tu dominio personalizado configurado en GitHub).

---

## Opción 2: Despliegue en Coolify

En Coolify tienes dos métodos excelentes:

### Método A: Aplicación Estática en Coolify (Nixpacks / Caddy - Sin Dockerfile)
1. En Coolify → **Create Application** → selecciona tu repositorio `djcoraanco/dylan_docker` y rama `main`.
2. **Build Pack**: Selecciona **Static**.
3. **Build Command**: `npm run build`
4. **Publish Directory**: `dist`
5. **Is it SPA?**: Marca la casilla **Yes** (para redirección a `index.html`).
6. Configura tu dominio con SSL en la pestaña **Domains** y pulsa **Deploy**.

### Método B: Dockerfile Nginx (Contenedor Ultraligero - Recomendado si usas Docker)
1. En Coolify → **Create Application** → selecciona el repositorio `djcoraanco/dylan_docker` y rama `main`.
2. **Build Pack**: Selecciona **Dockerfile**.
   - Dockerfile path: `Dockerfile`
   - Build context: `.`
3. **Puerto**: `80` (el contenedor Nginx Alpine expone el puerto 80, incluye compresión Gzip, caché inmutable para `/assets/` y regla de fallback SPA).
4. Configura tu dominio con SSL y pulsa **Deploy**.

---

### Estructura de salida estática en `/dist`:
- `index.html` (Home)
- `about/index.html`
- `book/index.html`
- `consulting/index.html`
- `consulting/*/index.html` (marketing, business-setup, supply-chain, cybersecurity, etc.)
- `portfolio/index.html`
- `press/index.html`
- `contact/index.html`
- `intake-dq7k2m/index.html`
- `404.html` (Fallback SPA)
- `.nojekyll` (Compatibilidad GitHub Pages)
- `robots.txt`, `sitemap.xml`, `llms.txt`
