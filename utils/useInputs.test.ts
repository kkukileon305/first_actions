import { renderHook, act } from "@testing-library/react";
import useInputs from "@/utils/useInputs";
import { ChangeEvent } from "react";

it("initial test", () => {
  const {
    result: {
      current: { handleChange, values, reset },
    },
  } = renderHook(() =>
    useInputs({
      a: "1",
    }),
  );

  expect(values).toEqual({
    a: "1",
  });
});

it("should ", () => {
  const { result } = renderHook(() =>
    useInputs({
      username: "陳心美",
    }),
  );

  const mockEvent = {
    target: { name: "username", value: "김철수" },
  } as ChangeEvent<HTMLInputElement>;

  act(() => {
    result.current.handleChange(mockEvent);
  });

  expect(result.current.values).toEqual({
    username: "김철수",
  });
});

it("should ", () => {
  const { result } = renderHook(() =>
    useInputs({
      username: "陳心美",
      email: "email",
    }),
  );

  const mockEvent1 = {
    target: { name: "username", value: "김철수" },
  } as ChangeEvent<HTMLInputElement>;
  const mockEvent2 = {
    target: { name: "email", value: "email2" },
  } as ChangeEvent<HTMLInputElement>;

  act(() => {
    result.current.handleChange(mockEvent1);
    result.current.handleChange(mockEvent2);
  });

  expect(result.current.values).toEqual({
    username: "김철수",
    email: "email2",
  });
});

it("should ", () => {
  const { result } = renderHook(() =>
    useInputs({
      username: "陳心美",
      email: "email",
    }),
  );

  const mockEvent1 = {
    target: { name: "username", value: "김철수" },
  } as ChangeEvent<HTMLInputElement>;
  const mockEvent2 = {
    target: { name: "email", value: "email2" },
  } as ChangeEvent<HTMLInputElement>;

  act(() => {
    result.current.handleChange(mockEvent1);
    result.current.handleChange(mockEvent2);
  });

  expect(result.current.values).toEqual({
    username: "김철수",
    email: "email2",
  });
});
