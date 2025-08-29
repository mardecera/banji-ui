import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import Spin from "./Spin"

describe("Spin", () => {
	it("renders without crashing", () => {
		const { container } = render(<Spin />)
		const spin = container.querySelector("span")
		expect(spin).toBeTruthy()
	})

	it("has the correct class", () => {
		const { container } = render(<Spin />)
		const spin = container.querySelector("span")
		expect(spin).toHaveClass("binland-spin")
	})
})
