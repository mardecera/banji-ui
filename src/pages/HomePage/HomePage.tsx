import { Button } from "@banji-ui"

const HomePage = () => {
	return (
		<section className="w-full max-w-210 rounded-3xl bg-white/85 p-12 shadow-[0_12px_50px_rgba(15,23,42,0.14)] backdrop-blur-sm">
			<p className="m-0 text-[0.8rem] tracking-widest text-teal-700 uppercase">
				Banji UI
			</p>
			<h1 className="my-2 text-[clamp(2rem,5vw,3rem)] leading-tight font-bold">
				Componentes consistentes para productos web
			</h1>
			<p className="mb-8 max-w-[62ch] text-slate-700">
				Construye interfaces rápido con componentes listos para usar, tipados y
				documentados. Esta landing te presenta la librería y la sección Docs te
				muestra ejemplos prácticos.
			</p>
			<div className="flex flex-wrap gap-3">
				<Button label="Ver Documentación" href="/docs" />
			</div>
		</section>
	)
}

export default HomePage
