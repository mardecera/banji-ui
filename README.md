# 🚀 Banji UI

**Banji UI** es una librería de componentes para React construida con **Tailwind CSS v4**, enfocada en velocidad de desarrollo, consistencia visual y composición flexible.

Incluye componentes reutilizables, tipados en TypeScript y listos para integrarse en cualquier proyecto moderno basado en Vite o React.

---

## 📦 Instalación

```bash
pnpm add banji-ui
```

o con npm:

```bash
npm install banji-ui
```

---

## ⚠️ Importante: estilos

Banji UI incluye estilos compilados. Debes importarlos explícitamente en tu app:

```ts
import 'banji-ui/style.css'
```

Sin esto, los componentes no tendrán estilos.

---

## 🧩 Uso básico

```tsx
import "banji-ui/style.css"
import { Button } from "banji-ui"

export default function App() {
  return <Button label="click me"/>
}
```
