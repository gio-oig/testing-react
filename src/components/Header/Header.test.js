import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Test header component", () => {
  // beforeAll(() => {
  //   render(<Header {...props} />);
  // });

  it("should render header with props", () => {
    const props = {
      title: "todo app",
    };

    render(<Header {...props} />);

    const header = screen.getByText(props.title);
    expect(header).toBeInTheDocument();
  });

  it("should distinguish heding", () => {
    render(<Header title="asdsa" />);

    const headerElement = screen.getByRole("heading", { name: "cats" });
    expect(headerElement).toBeInTheDocument();
  });

  it("should count header", () => {
    render(<Header />);

    const headerElements = screen.getAllByRole("heading");
    expect(headerElements.length).toBe(2);
  });
});
