import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"

const root =
	document.getElementById("root") ??
	(() => {
		throw new Error("Elemento #root no encontrado")
	})()

createRoot(root).render(
	<StrictMode>
		<App />
	</StrictMode>,
)
