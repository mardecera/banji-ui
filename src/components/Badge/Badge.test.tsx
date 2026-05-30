import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Badge from "./Badge";

describe("Badge", () => {
	it("renders the label", () => {
		render(<Badge label="Beta" />);
		expect(screen.getByText("Beta")).toBeInTheDocument();
	});
});
