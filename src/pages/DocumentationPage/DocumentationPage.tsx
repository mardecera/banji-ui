import { useRouteLoaderData } from "react-router-dom"
import Badge from "../../components/Badge/Badge"
import Button from "../../components/Button/Button"
import type { RootLoaderData } from "../../routes/router"

const DocumentationPage = () => {
	const data = useRouteLoaderData("root") as RootLoaderData
	const { badgeStoryUrl, buttonStoryUrl } = data

	return (
		<section className="w-full max-w-245">
			<header className="mb-6">
				<p className="m-0 text-[0.8rem] tracking-widest text-teal-700 uppercase">
					Documentación
				</p>
				<h1 className="my-2 text-[clamp(2rem,4vw,2.5rem)] leading-tight font-bold">
					Componentes disponibles
				</h1>
				<p className="max-w-[62ch] text-slate-700">
					Aquí tienes ejemplos de uso de los componentes principales de la librería.
				</p>
			</header>

			<div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
				<article className="rounded-2xl bg-white/85 p-5 shadow-[0_12px_40px_rgba(15,23,42,0.10)]">
					<h2 className="mt-0">Button</h2>
					<p className="text-slate-700">
						Botón principal con variante sólida y ghost, soporte para enlace externo.
					</p>
					<div className="my-4 flex flex-wrap items-center gap-3">
						<Button label="Primary" />
						<Button label="Ghost" variant="ghost" />
						<Button
							label="Open Link"
							href="https://storybook.js.org"
							target="_blank"
							rel="noreferrer"
						/>
					</div>
					<Button
						label="Ver en Storybook"
						variant="ghost"
						href={buttonStoryUrl}
						target="_blank"
						rel="noreferrer"
					/>
				</article>

				<article className="rounded-2xl bg-white/85 p-5 shadow-[0_12px_40px_rgba(15,23,42,0.10)]">
					<h2 className="mt-0">Badge</h2>
					<p className="text-slate-700">
						Indicadores compactos para estados, tags y contexto visual.
					</p>
					<div className="my-4 flex flex-wrap items-center gap-3">
						<Badge label="Neutral" tone="neutral" />
						<Badge label="Success" tone="success" />
						<Badge label="Warning" tone="warning" />
						<Badge label="Danger" tone="danger" />
					</div>
					<Button
						label="Ver en Storybook"
						variant="ghost"
						href={badgeStoryUrl}
						target="_blank"
						rel="noreferrer"
					/>
				</article>
			</div>
		</section>
	)
}

export default DocumentationPage
