import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Portfolio from "../Portfolio";

const renerWithRouter = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(<Router history={history}>{component}</Router>),
  };
};

afterEach(cleanup);

test("rendering pages", () => {
  const { getByText, getAllByText, container } = renerWithRouter(<Portfolio />);

  // render Contact page
  fireEvent.click(getByText(/contact me/i));
  expect(getAllByText(/Feel free to contact me via.../i)).toBeTruthy();
  // render About me page
  fireEvent.click(getByText(/About me/i));
  expect(container.querySelector("#about")).toBeTruthy();
});
