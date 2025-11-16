import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import Spin from "./Spin"

describe("Spin", () => {
	it("renders correctly", () => {
		render(<Spin />)
		expect(screen.getByTestId("spin")).toBeInTheDocument()
	})

	it("has correct class", () => {
		render(<Spin />)
		const element = screen.getByTestId("spin")
		expect(element).toHaveClass("binland-spin")
	})
})
