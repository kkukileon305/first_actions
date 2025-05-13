import { render, screen } from "@testing-library/react";
import SearchForm from "@/app/SearchForm";
import { userEvent } from "@testing-library/user-event";

it("should ", async () => {
  const user = userEvent.setup();

  const onSearch = jest.fn();
  render(<SearchForm onSearch={onSearch} />);

  const button = screen.getByRole("button");
  const input = screen.getByPlaceholderText("검색어를 입력하세요");

  await user.type(input, "搜尋");
  await user.click(button);

  expect(onSearch).toHaveBeenCalledTimes(1);
});
