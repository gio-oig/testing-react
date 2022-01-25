import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "./AddInput";

const mockedSetTodo = jest.fn();

describe("Testing Addinput component", () => {
  it("should be render input element", () => {
    const props = {
      todos: [],
      setTodos: mockedSetTodo,
    };
    render(<AddInput {...props} />);

    const inputEl = screen.getByPlaceholderText(/add a new task here.../i);
    expect(inputEl).toBeInTheDocument();
  });

  it("should be render input element", () => {
    const props = {
      todos: [],
      setTodos: mockedSetTodo,
    };
    render(<AddInput {...props} />);

    const todo = "Go Grocery Shoping";
    const inputEl = screen.getByPlaceholderText(/add a new task here.../i);
    fireEvent.change(inputEl, { target: { value: todo } });
    expect(inputEl.value).toBe(todo);
  });

  it("should have empty input when add button is clicked", () => {
    const props = {
      todos: [],
      setTodos: mockedSetTodo,
    };
    render(<AddInput {...props} />);

    const todo = "Go Grocery Shoping";
    const buttonEl = screen.getByRole("button", { name: /add/i });
    const inputEl = screen.getByPlaceholderText(/add a new task here.../i);
    fireEvent.change(inputEl, { target: { value: todo } });
    fireEvent.click(buttonEl);
    expect(inputEl.value).toBe("");
  });
});
