import { createBrowserRouter, redirect } from "react-router-dom"
import RootLayout from "../layouts/RootLayout/RootLayout"
import DocsPage from "../pages/DocsPage/DocsPage"
import HomePage from "../pages/HomePage/HomePage"
import DocsLayout from "../layouts/DocsLayout/DocsLayout"
import ButtonPage from "../pages/ButtonPage/ButtonPage"
import BadgePage from "../pages/BadgePage/BadgePage"
import SidebarPage from "@/pages/SidebarPage/SidebarPage"

export type RootLoaderData = {
	badgeStoryUrl: string
	buttonStoryUrl: string
}

function rootLoader(): RootLoaderData {
	const storybookBase = import.meta.env.DEV
		? "http://localhost:6006"
		: "/storybook"

	return {
		buttonStoryUrl: `${storybookBase}/?path=/story/components-button--solid`,
		badgeStoryUrl: `${storybookBase}/?path=/story/components-badge--neutral`
	}
}

export const router = createBrowserRouter([
	{
		id: "root",
		path: "/",
		loader: rootLoader,
		Component: RootLayout,
		children: [
			{
				index: true,
				Component: HomePage
			},
			{
				path: "docs",
				Component: DocsLayout,
				children: [
					{
						index: true,
						Component: DocsPage
					},
					{
						path: "button",
						Component: ButtonPage
					},
					{
						path: "badge",
						Component: BadgePage
					},
					{
						path: "sidebar",
						Component: SidebarPage
					}
				]
			},
			{
				path: "*",
				loader: () => redirect("/")
			}
		]
	}
])
