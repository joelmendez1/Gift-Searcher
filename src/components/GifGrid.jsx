import React, { useEffect, useState } from 'react'
import { getGifs } from '../utils/getGifs'

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category)
      .then(res => setImages(res))
  }, [category])

  return (
    <>
      <h3>{category}</h3>
      <ol>
        {
          images.map(({id, title}) => {
            if(title.length > 1) {
              return <li key={id}>{title}</li>
            }
          })
        }
      </ol>
    </>
  )
}
