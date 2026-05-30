import { createBrowserRouter, redirect } from "react-router-dom";

import ModalPage from "@/pages/ModalPage/Modal.page";
import SidebarPage from "@/pages/SidebarPage/Sidebar.page";
import DocsLayout from "../layouts/DocsLayout/DocsLayout";
import RootLayout from "../layouts/RootLayout/RootLayout";
import BadgePage from "../pages/BadgePage/Badge.page";
import ButtonPage from "../pages/ButtonPage/Button.page";
import DocsPage from "../pages/DocsPage/Docs.page";
import HomePage from "../pages/HomePage/Home.page";

export type RootLoaderData = {
	badgeStoryUrl: string;
	buttonStoryUrl: string;
	sidebarStoryUrl: string;
};

function rootLoader(): RootLoaderData {
	const storybookBase = import.meta.env.DEV
		? "http://localhost:6006"
		: "/storybook";

	return {
		buttonStoryUrl: `${storybookBase}/?path=/story/components-button--default`,
		badgeStoryUrl: `${storybookBase}/?path=/story/components-badge--neutral`,
		sidebarStoryUrl: `${storybookBase}/?path=/story/components-sidebar--example`
	};
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
					},
					{
						path: "modal",
						Component: ModalPage
					}
				]
			},
			{
				path: "*",
				loader: () => redirect("/")
			}
		]
	}
]);
