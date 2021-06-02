import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders button element", () => {
  render(<App />);
  const btn = screen.getByText(/hello/i);
  expect(btn).toBeInTheDocument();
});
