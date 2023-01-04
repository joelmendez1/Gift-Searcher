import { render } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Test in GifItem component', () => {
  test('Should match snapshot', () => {
    const title = "Titulo";
    const url = "https://one-punch.com/saitama.jpg";
    const { container } = render
      (
        <GifItem title={title} url={url} />
      )

    expect(container).toMatchSnapshot();
  })
})