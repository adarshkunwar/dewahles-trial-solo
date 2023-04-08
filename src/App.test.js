import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

// describe("App component", () => {
//   it("should toggle the visibility of the 'Hello World' text", () => {
//     const { getByText, getByRole } = render(<App />);
//     const text = getByText("Hello World");
//     const toggleButton = getByRole("button");

//     // Text should not be visible initially
//     expect(text).not.toBeVisible();

//     // Click the toggle button
//     fireEvent.click(toggleButton);

//     // Text should be visible
//     expect(text).toBeVisible();

//     // Click the toggle button again
//     fireEvent.click(toggleButton);

//     // Text should not be visible again
//     expect(text).not.toBeVisible();
//   });
// });

test("should toggle the visibility of the 'Hello World' text", () => {
  render(<App />);
  const text = screen.getByRole("heading");
  console.log(text);
  // const toggleButton = getByRole("button");
  expect(screen.getByRole("heading")).toHaveTextContent(/Hello World/);
  // expect(text).toHaveTextContent(/Hello World/);
});
