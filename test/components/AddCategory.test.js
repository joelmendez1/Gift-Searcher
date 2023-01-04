import { AddCategory } from "../../src/components/AddCategory";
import { fireEvent, render, screen } from "@testing-library/react";


describe('Test in AddCategory component', () => {
  const onNewCategory = () => { };

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

    fireEvent.input(input, { target: { value: "Saitama" } });

    expect(input.value).toBe("Saitama");
  });
});
