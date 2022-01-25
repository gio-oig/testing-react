import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { TEST_IDS } from "../../utils/testIds";
import Todo from "./Todo";

function MockedTodo() {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
}

function addtasks(tasks) {
  const todoInputElement = screen.getByPlaceholderText(/Add a new task here/i);
  const addTodoButton = screen.getByRole("button", { name: /Add/i });
  tasks.forEach((task) => {
    fireEvent.change(todoInputElement, { target: { value: task } });
    fireEvent.click(addTodoButton);
  });
}

describe("Testing <Todo/> component.", () => {
  it("should render sumbited todo", () => {
    render(<MockedTodo />);
    const inputText = "Go Grocery Shopping";
    addtasks([inputText]);
    const addedTodoDiv = screen.getByText(inputText);
    expect(addedTodoDiv).toBeInTheDocument();
  });

  it("should render multiple todo items.", () => {
    render(<MockedTodo />);
    addtasks(["Go Grocery Shopping", "Pat my Cat", "Wash my Hands"]);
    const addedTodoes = screen.getAllByTestId(TEST_IDS.todo);
    expect(addedTodoes.length).toBe(3);
  });

  it("should not have completed class when initially rendered.", () => {
    render(<MockedTodo />);
    addtasks(["Go Grocery Shopping"]);
    const addedTodoDiv = screen.getByText(/Go Grocery Shopping/i);
    expect(addedTodoDiv).not.toHaveClass("todo-item-active");
  });

  it("task should have completed class when clicked.", () => {
    render(<MockedTodo />);
    addtasks(["Go Grocery Shopping"]);
    const addedTodoDiv = screen.getByText(/Go Grocery Shopping/i);
    fireEvent.click(addedTodoDiv);
    expect(addedTodoDiv).toHaveClass("todo-item-active");
  });
});
