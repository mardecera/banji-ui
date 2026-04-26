# Banji UI

Plantilla para una libreria de componentes React con:

- Vite para desarrollo rapido
- Tailwind CSS v4 para estilos de componentes
- Vitest para pruebas
- Storybook para documentacion visual
- Landing integrada para presentar componentes

## Comandos

- `pnpm dev`: levanta la landing en local.
- `pnpm start`: sirve en localhost el build generado en `dist/`.
- `pnpm build`: compila landing + Storybook en una sola salida (`dist/` y `dist/storybook/`).
- `pnpm storybook`: levanta Storybook en local.
- `pnpm build:storybook:web`: compila Storybook dentro de `dist/storybook`.
- `pnpm build:storybook`: compila Storybook estatico.
- `pnpm test`: ejecuta tests con Vitest.
- `pnpm lint`: analiza y linta con Biome.
- `pnpm lint:fix`: aplica correcciones de lint con Biome.
- `pnpm format`: formatea el codigo con Biome.
- `pnpm build:lib`: compila la libreria para npm (salida `dist-lib/` con ESM, CJS y tipos).

## Publicar en npm

1. Inicia sesion en npm:
   - `npm login`
2. Asegura version correcta en `package.json` (`name` y `version`).
3. Ejecuta:
   - `pnpm prepublishOnly`
   - `npm publish`

`prepublishOnly` corre tests y build de libreria antes de publicar.
