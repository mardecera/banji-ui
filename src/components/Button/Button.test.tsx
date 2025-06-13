import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { Button } from "./Button"
import styles from "./Button.module.css"

describe("Button", () => {
	it("renders children", () => {
		render(<Button>Enviar</Button>)
		expect(screen.getByText("Enviar")).toBeInTheDocument()
	})

	it("calls onClick when clicked", () => {
		const handleClick = vi.fn()
		render(<Button onClick={handleClick}>Click</Button>)
		fireEvent.click(screen.getByText("Click"))
		expect(handleClick).toHaveBeenCalledTimes(1)
	})

	it("has primary class by default", () => {
		render(<Button>Ok</Button>)
		expect(screen.getByRole("button")).toHaveClass(styles["banji-btn--primary"])
	})

	it("can have secondary variant", () => {
		render(<Button variant="banji-btn--secondary">Other</Button>)
		expect(screen.getByRole("button")).toHaveClass(styles["banji-btn--secondary"])
	})

	it("can be disabled", () => {
		render(<Button disabled>Disabled</Button>)
		expect(screen.getByRole("button")).toBeDisabled()
	})
})
