import React, { useEffect, useState } from 'react'
import { getGifs } from '../utils/getGifs'
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category)
      .then(res => setImages(res))
  }, [category])

  return (
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
  )
}
