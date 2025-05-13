import { fireEvent, render, screen } from "@testing-library/react";
import Checkbox from "@/app/Checkbox";

it("should ", () => {
  render(<Checkbox />);

  const checkbox = screen.getByTestId("input");

  expect(checkbox).not.toBeChecked();

  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
});
