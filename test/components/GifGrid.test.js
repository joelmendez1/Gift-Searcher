import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

const gifs = [
  {
    id: 1,
    title: "One Punch",
    url: "Mock URL OP"
  },
  {
    id: 2,
    title: "Dragon Ball",
    url: "Mock URL DB"
  },
  {
    id: 3,
    title: "Attack on Titan",
    url: "Mock URL AOT"
  },
]

describe('tests in GifGrid component', () => {
  const category = 'One Punch';
  const useGifMockLoading = (loadingStatus) => {
    return useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: loadingStatus
    })
  };

  test('should match snapshot when loading is true', () => {
    useGifMockLoading(true)

    const { container } = render(<GifGrid category={category} />)

    expect(container).toMatchSnapshot();
  });

  test('should match snapshot when loading is false', () => {
    useGifMockLoading(false)

    const { container } = render(<GifGrid category={category} />)

    expect(container).toMatchSnapshot();
  });

  test('should show loading at first instance', () => {
    useGifMockLoading(true);

    render(<GifGrid category={category} />);

    expect(screen.getByText('Gifs cargando...'));
  });

  test('should show content if is not loading', () => {
    useGifMockLoading(false);

    render(<GifGrid category={category} />);

    expect(screen.getByRole("heading", { level: 3 }).innerHTML).toContain(category)
  })
});
