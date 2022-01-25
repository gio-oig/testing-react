import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "./TodoFooter";

function MockTodoFooter({ numberOfIncompleteTasks }) {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
}

describe("testing todoFooter component", () => {
  it("should show correct number of existing todoes", () => {
    const props = {
      numberOfIncompleteTasks: 0,
    };

    render(<MockTodoFooter {...props} />);

    const textElment = screen.getByText("0 tasks left");
    expect(textElment).toBeInTheDocument();
  });

  it("should render text with 1 in it", () => {
    const props = {
      numberOfIncompleteTasks: 1,
    };

    render(<MockTodoFooter {...props} />);

    const textElment = screen.getByText("1 task left");
    expect(textElment).toBeInTheDocument();
  });

  it("should render text with 5 in it", () => {
    const props = {
      numberOfIncompleteTasks: 5,
    };

    render(<MockTodoFooter {...props} />);

    const textElment = screen.getByText("5 tasks left");
    expect(textElment).toBeInTheDocument();
  });

  it("should render text with 5 in it", () => {
    const props = {
      numberOfIncompleteTasks: 5,
    };

    render(<MockTodoFooter {...props} />);

    const textElment = screen.getByText("5 tasks left");
    expect(textElment).toBeVisible();
  });
});
