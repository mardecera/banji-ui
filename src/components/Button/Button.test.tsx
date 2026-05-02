import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import Button from "./Button"

describe("Button", () => {
	it("renders the label", () => {
		render(<Button>Comprar</Button>)
		expect(screen.getByRole("button", { name: "Comprar" })).toBeInTheDocument()
	})
})
