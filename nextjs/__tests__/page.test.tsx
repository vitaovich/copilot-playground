import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Portfolio Home Page", () => {
  it("renders About Me section", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /about me/i })
    ).toBeInTheDocument();
  });

  it("renders Projects section and project cards", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /projects/i })
    ).toBeInTheDocument();
    expect(screen.getAllByRole("listitem").length).toBeGreaterThan(0);
    expect(
      screen.getByRole("heading", { name: /task tracker/i })
    ).toBeInTheDocument();
  });
});