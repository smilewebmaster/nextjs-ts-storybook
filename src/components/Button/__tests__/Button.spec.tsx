import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "../index";

test("renders button", () => {
  render(<Button>Hello</Button>);
  const btn = screen.getByText(/hello/i);
  expect(btn).toBeInTheDocument();
});
