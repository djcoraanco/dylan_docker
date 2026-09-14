# Despliegue en Coolify

Pasos para desplegar este repositorio en Coolify (desde GitHub, sin Docker Hub):

1. Conectar GitHub a Coolify
   - En Coolify → Integrations → Git Providers, autoriza GitHub (recomendada) o añade un token con permisos de `repo` para clonar.

2. Crear la aplicación
   - En Coolify, `Create Application` → selecciona el repositorio `djcoraanco/dylan_docker` y la rama `main`.

3. Configurar build
   - Build method: `Dockerfile`
   - Dockerfile path: `Dockerfile`
   - Build context: `.`
   - Build args: ninguno por defecto

4. Puerto y ejecución
   - Puerto de la app: `80` (el `Dockerfile` expone `80`).
   - Comando de ejecución: no hace falta (ya configurado en `Dockerfile`).

5. Variables de entorno y Secrets
   - Añade en Coolify cualquier variable o secreto necesario (APIs, credenciales). No son necesarios para un build estático normal.

6. Auto-deploy
   - Activa `Auto deploy on push` para que cada push a `main` dispare un nuevo despliegue.

7. Logs y troubleshooting
   - Revisa los logs de build y runtime en Coolify si el build falla.
   - Nota: si hay errores relacionados con dependencias nativas de `rollup` en Alpine, ya actualizamos el `Dockerfile` para usar `node:22-bullseye-slim`.

8. Dominio y TLS
   - Añade tu dominio en Coolify y activa HTTPS (Let's Encrypt) desde la UI.

Notas finales

- El repositorio ya está en https://github.com/djcoraanco/dylan_docker.git y contiene el `Dockerfile` actualizado.
- Si quieres, puedo supervisar el siguiente deploy en Coolify y revisar logs en cuanto aparezcan.
