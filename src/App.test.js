import { render, screen } from "@testing-library/react";
import App from "./App";
import { store } from './store/store';
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

test("renders главная", () => {
  render(
    <MemoryRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/главная/i);

  expect(linkElement).toBeInTheDocument();
});
