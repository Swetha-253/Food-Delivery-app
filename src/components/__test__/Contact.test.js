import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

test("should load contact us page", () => {
  render(<Contact />);
  
//   const heading = screen.getByRole("heading");
//   expect(heading).toBeInTheDocument();
  const heading = screen.getAllByRole("heading");
  expect(heading.length).toBeGreaterThan(0);
});
