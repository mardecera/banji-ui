import { render, screen } from "@testing-library/react"
import Sidebar from "./Sidebar"
import type { SidebarItemProps } from "./SidebarItem/SidebarItem.types"

const tabs: SidebarItemProps[] = [
	{
		id: "home",
		children: "Introducción",
		href: "/docs"
	},
	{
		id: "button",
		children: "Button",
		href: "/docs/button"
	}
]

describe("Aside", () => {
	it("renders second tab", () => {
		render(
			<Sidebar>
				{tabs?.map((tab) => (
					<Sidebar.Item key={tab.id} href={tab.href}>
						{tab.children}
					</Sidebar.Item>
				))}
			</Sidebar>
		)
		expect(screen.getByRole("link", { name: "Button" })).toBeInTheDocument()
	})
	it("has correct href for button link", () => {
		render(
			<Sidebar>
				{tabs?.map((tab) => (
					<Sidebar.Item key={tab.id} href={tab.href}>
						{tab.children}
					</Sidebar.Item>
				))}
			</Sidebar>
		)
		const link = screen.getByRole("link", { name: "Button" })
		expect(link).toHaveAttribute("href", "/docs/button")
	})
})
