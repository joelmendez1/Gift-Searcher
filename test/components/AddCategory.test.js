import { AddCategory } from "../../src/components/AddCategory";
import { fireEvent, render, screen } from "@testing-library/react";


describe('Test in AddCategory component', () => {
  const inputValue = "Saitama";
  const onNewCategory = jest.fn();

  test('should match snapshot', () => {
    const { container } = render
      (
        <AddCategory onNewCategory={onNewCategory} />
      )

    expect(container).toMatchSnapshot();
  });

  test('should change input content', () => {
    render
      (
        <AddCategory onNewCategory={onNewCategory} />
      )
    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: inputValue } });

    expect(input.value).toBe("Saitama");
  });

  test('should call onNewCategory if input has a value', () => {
    render
      (
        <AddCategory onNewCategory={onNewCategory} />
      )

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe('');
    expect(onNewCategory).toHaveBeenLastCalledWith(inputValue);
  });

  test('should not call onNewCategory if input has not value in it', () => {
    expect(onNewCategory).not.toHaveBeenLastCalledWith(null);
  });
});
