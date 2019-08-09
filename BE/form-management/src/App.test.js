import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import App from "./App.js";
import FormikUserForm from "./components/UserForm";

describe("<App />", () => {
  // Test one event
  it("renders without crashing", () => {
    render(<App />);
  });
  it("submit event works", () => {
    const { getByText } = render(<FormikUserForm />);
    const submitButton = getByText(/submit/i);
    fireEvent.click(submitButton);
  });
  it("data appears on page", async () => {
    const { getByText } = render(<FormikUserForm />);
    await waitForElement(() => getByText(/Hush Puppies/i));
  });
});
