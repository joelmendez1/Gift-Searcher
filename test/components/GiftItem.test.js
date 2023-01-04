import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Test in GifItem component', () => {
  const title = "Titulo";
  const url = "https://one-punch.com/saitama.jpg";

  test('Should match snapshot', () => {
    const { container } = render
      (
        <GifItem title={title} url={url} />
      );

    expect(container).toMatchSnapshot();
  })

  test('Should show image with correct url', () => {
    const { container } = render
      (
        <GifItem title={title} url={url} />
      );
    const { src, alt } = screen.getByRole('img');

    expect(src).toBe(url);
    expect(alt).toBe(title);
  })

  test('Should show title in component', () => {
    const { container } = render
      (
        <GifItem title={title} url={url} />
      );

    expect(screen.getByText(title)).toBeTruthy();
  })
})