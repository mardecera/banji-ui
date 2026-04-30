import { NavLink, Outlet } from "react-router-dom"

import { activeStyle } from "./RootLayout.const"

const RootLayout = () => {
	return (
		<main className="min-h-screen bg-radial-[at_80%_0%] from-blue-100 to-slate-50 px-5 py-5 font-['Sora','Segoe_UI',sans-serif] text-slate-800">
			<div className="w-full flex justify-center">
				<nav className="max-w-245 w-full flex gap-2">
					<NavLink
						to="/"
						className={({ isActive }) =>
							activeStyle({
								active: isActive
							})
						}
					>
						Home
					</NavLink>
					<NavLink
						to="/docs"
						className={({ isActive }) =>
							activeStyle({
								active: isActive
							})
						}
					>
						Docs
					</NavLink>
				</nav>
			</div>
			<section className="flex justify-center">
				<div className="max-w-245 w-full my-4">
					<Outlet />
				</div>
			</section>
		</main>
	)
}

export default RootLayout
