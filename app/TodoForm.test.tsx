import { fireEvent, render, screen } from "@testing-library/react";
import TodoForm from "@/app/TodoForm";

it("should ", () => {
  render(<TodoForm />);

  const input = screen.getByPlaceholderText("할 일을 입력하세요");

  fireEvent.change(input, { target: { value: "todolist" } });

  expect(input).toHaveValue("todolist");
});
