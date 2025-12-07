import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import Button from "./Button"

describe("Button", () => {
	it("renders children correctly", () => {
		render(<Button>Click me</Button>)
		expect(screen.getByText("Click me")).toBeInTheDocument()
	})

	it("renders loading spinner when loading", () => {
		render(<Button loading>Test</Button>)
		expect(screen.getByTestId("spin")).toBeDefined()
	})

	it("renders icon on the left when provided", () => {
		render(<Button icon={<span data-testid="fire">"🔥"</span>}>Test</Button>)
		expect(screen.getByTestId("fire")).toBeInTheDocument()
	})

	it("passes htmlType correctly", () => {
		render(<Button type="submit">Submit</Button>)
		expect(screen.getByRole("button")).toHaveAttribute("type", "submit")
	})
})
