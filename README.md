# Portiq Frontend Test

A small React and Vite website created to verify Portiq frontend deployments.

The deployment should be detected as Vite, built into `dist`, and served by the
generated Nginx image. The `/status` route also verifies SPA fallback behavior.

Set `VITE_RELEASE_LABEL` as a build-scoped Portiq environment variable to verify
that public frontend configuration is available during the Vite build.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```
