import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import Sandbox from "./Sandbox"

describe("Sandbox", () => {
	it("renders the code", () => {
		render(
			<Sandbox>
				<Sandbox.Code code="console.log('hello world')" />
			</Sandbox>
		)
		expect(screen.getByText("'hello world'")).toBeInTheDocument()
	})
})
