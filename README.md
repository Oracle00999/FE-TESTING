# Portiq Frontend Test

A small React and Vite website created to verify Portiq frontend deployments.

The deployment should be detected as Vite, built into `dist`, and served by the
generated Nginx image. The `/status` route also verifies SPA fallback behavior.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```
