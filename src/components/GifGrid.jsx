import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './index';

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category)

  return (
    !isLoading ?
    (
      <>
        <h3>{category}</h3>
        <div className='card-grid'>
          {
            images.map((image) => {
              return <GifItem key={image.id} {...image}/>
            })
          }
        </div>
      </>
    ) : <h2>Gifs cargando...</h2>
  )
}
