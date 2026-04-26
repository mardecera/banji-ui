import { createBrowserRouter, redirect } from "react-router-dom"
import RootLayout from "../layouts/RootLayout"
import DocumentationPage from "../pages/DocumentationPage/DocumentationPage"
import HomePage from "../pages/HomePage/HomePage"

export type RootLoaderData = {
	badgeStoryUrl: string
	buttonStoryUrl: string
}

function rootLoader(): RootLoaderData {
	const storybookBase = import.meta.env.DEV ? "http://localhost:6006" : "/storybook"

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
				Component: DocumentationPage
			},
			{
				path: "*",
				loader: () => redirect("/")
			}
		]
	}
])
