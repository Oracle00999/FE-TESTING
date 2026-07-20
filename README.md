# Portiq Frontend Test

A small React and Vite website created to verify Portiq frontend deployments.

The deployment should be detected as Vite, built into `dist`, and served by the
generated Nginx image. The `/status` route also verifies SPA fallback behavior.

Set `VITE_RELEASE_LABEL` and `VITE_API_URL` in Portiq to verify that public
frontend configuration is available during the Vite build. Both values are
displayed in the release manifest after deployment.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```
