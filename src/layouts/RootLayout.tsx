import { NavLink, Outlet } from "react-router-dom"

const RootLayout = () => {
	return (
		<main className="min-h-screen bg-radial-[at_80%_0%] from-blue-100 to-slate-50 px-5 py-5 font-['Sora','Segoe_UI',sans-serif] text-slate-800">
			<nav className="mx-auto flex w-full max-w-245 gap-2">
				<NavLink
					to="/"
					className={({ isActive }) =>
						[
							"rounded-full px-3.5 py-2 text-sm font-semibold no-underline transition-colors",
							isActive
								? "bg-teal-700 text-slate-50"
								: "text-slate-700 hover:bg-slate-200"
						].join(" ")
					}
				>
					Home
				</NavLink>

				<NavLink
					to="/docs"
					className={({ isActive }) =>
						[
							"rounded-full px-3.5 py-2 text-sm font-semibold no-underline transition-colors",
							isActive
								? "bg-teal-700 text-slate-50"
								: "text-slate-700 hover:bg-slate-200"
						].join(" ")
					}
				>
					Docs
				</NavLink>
			</nav>

			<section className="grid min-h-[calc(100vh-56px)] place-items-center p-8">
				<Outlet />
			</section>
		</main>
	)
}

export default RootLayout
