import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import App from "./App.js";

describe("<App />", () => {
  // Test one event
  it("renders without crashing", () => {
    render(<App />);
  });
  it("submit event works", () => {
    const submitButton = getByText("submit");
    fireEvent.click(submitButton);
  });
  it("data appears on page", () => {
    const dataItem = getByText("Hush Puppies");
  });
});
