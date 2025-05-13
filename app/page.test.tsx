import Home from "@/app/page";
import { fireEvent, render, screen } from "@testing-library/react";

describe("", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("초기 상태 테스트", () => {
    const todoCountParagraph = screen.getByText("총 0개의 할 일이 있습니다");

    expect(todoCountParagraph).toBeInTheDocument();
  });

  it("할 일 추가 테스트", () => {
    const input = screen.getByPlaceholderText("할 일을 입력하세요");
    const button = screen.getByRole("button");
    fireEvent.change(input, { target: { value: "asd" } });
    fireEvent.click(button);

    const target = screen.getByText("asd");
    expect(target).toBeInTheDocument();
  });

  it("할 일 추가 완료 테스트", () => {
    const input = screen.getByPlaceholderText("할 일을 입력하세요");
    const button = screen.getByRole("button");
    fireEvent.change(input, { target: { value: "asd" } });
    fireEvent.click(button);

    const target = screen.getByTestId("todo-asd");
    expect(screen.getByText("총 1개의 할 일이 있습니다")).toBeInTheDocument();
    expect(screen.getByText("완료: 0개")).toBeInTheDocument();
    expect(target).toBeInTheDocument();
  });

  it("할일 완료 테스트", () => {
    const input = screen.getByPlaceholderText("할 일을 입력하세요");
    const button = screen.getByRole("button");
    fireEvent.change(input, { target: { value: "asd" } });
    fireEvent.click(button);

    expect(screen.getByText("총 1개의 할 일이 있습니다")).toBeInTheDocument();
    expect(screen.getByText("완료: 0개")).toBeInTheDocument();

    const checkbox = screen.getByTestId("todo-asd");
    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(screen.getByText("완료: 1개")).toBeInTheDocument();
    expect(screen.getByText("asd")).toHaveClass("line-through");
  });

  it("刪除要做的事", () => {
    const input = screen.getByPlaceholderText("할 일을 입력하세요");
    const button = screen.getByRole("button");
    fireEvent.change(input, { target: { value: "asd" } });
    fireEvent.click(button);

    expect(screen.getByText("총 1개의 할 일이 있습니다")).toBeInTheDocument();
    expect(screen.getByText("완료: 0개")).toBeInTheDocument();

    const checkbox = screen.getByTestId("todo-asd");
    fireEvent.click(checkbox);

    const todoDeleteBtn = screen.getByTestId("todo-delete-asd");
    fireEvent.click(todoDeleteBtn);

    expect(screen.queryByText("asd")).toBeNull();
    expect(screen.getByText("할 일이 없습니다")).toBeInTheDocument();
    expect(screen.getByText("총 0개의 할 일이 있습니다")).toBeInTheDocument();
  });
});
