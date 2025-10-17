# Despliegue en Cloudflare Pages (Next.js app router)

Estos pasos te guiarán para preparar y publicar tu proyecto Next.js en Cloudflare Pages usando `@cloudflare/next-on-pages`.


1. Instala dependencias locales (PowerShell):

```powershell
npm install
```

1. Build y preparar salida para Pages:

```powershell
npm run build:pages
```

El script generará la carpeta `out-pages` (preparada para Cloudflare Pages).

1. Configura `wrangler.toml`:

- Abre `wrangler.toml` y reemplaza `YOUR_ACCOUNT_ID` por tu Account ID.
- Cambia `name` por el nombre de tu proyecto en Cloudflare.

1. Publicar (PowerShell):

```powershell
# Publica a Cloudflare Pages (ajusta --project-name y --branch)
npm run publish:pages
```

1. Opcional: con la CLI de Wrangler:

```powershell
npx wrangler login
npx wrangler pages publish out-pages --project-name=YOUR_PROJECT_NAME
```

Notas:

- No subas credenciales al repositorio. Rellena `wrangler.toml` localmente.
- Si tu sitio usa variables de entorno, configúralas en el panel de Pages o usa `wrangler secret`.
- `@cloudflare/next-on-pages` está diseñada para Next.js con `app/` router; revisa la documentación oficial si usas features avanzadas.
