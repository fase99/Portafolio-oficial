# Despliegue en Cloudflare Pages (Next.js app router)

Estos pasos te guiarán para preparar y publicar tu proyecto Next.js en Cloudflare Pages usando OpenNext (`@opennextjs/cloudflare`).

1. Instala dependencias locales (PowerShell):

```powershell
npm install
```

1. Build y preparar salida para Pages:

```powershell
# El script usa OpenNext para adaptar la salida a Pages
npm run pages:build
```

El script generará la carpeta `out-pages` (preparada para Cloudflare Pages).

1. Configura `wrangler.toml`:

- Abre `wrangler.toml` y reemplaza `YOUR_ACCOUNT_ID` por tu Account ID.
- Cambia `name` por el nombre de tu proyecto en Cloudflare.
- Asegúrate de que `pages_build_output_dir = "out-pages"` esté presente (ya añadido).

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
- Si ves advertencias sobre módulos `node:` (por ejemplo `node:buffer`) en los logs de Pages, considera migrar a OpenNext (ya aplicado aquí) o ajustar tu código para evitar dependencias a módulos Node nativos.
