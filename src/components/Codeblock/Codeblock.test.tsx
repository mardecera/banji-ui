import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Codeblock from "./Codeblock";

describe("Codeblock", () => {
	it("renders the code", () => {
		render(<Codeblock code="console.log('hello world')" />);
		expect(screen.getByText("'hello world'")).toBeInTheDocument();
	});
});
