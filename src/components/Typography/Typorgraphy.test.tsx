import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import Typography from "./Typography"

describe("Typography", () => {
	it("renders the title", () => {
		render(<Typography.Title>Introducción</Typography.Title>)
		expect(screen.getByText("Introducción")).toBeInTheDocument()
	})
})
