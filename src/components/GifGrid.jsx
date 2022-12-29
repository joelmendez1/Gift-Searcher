import React from 'react'

export const GifGrid = ({ category }) => {

  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=W65sLfssSJYUBSUtQc0rP4aKTLjOYTXq&q=${category}&limit=20`;
    const resp = await fetch(url);
    const { data} = await resp.json();
    const gifs = data.map(({id, title, images}) => ({
      id: id,
      title: title,
      url: images.downsized_medium.url
    }));

    return gifs
  }

  getGifs()

  return (
    <>
      <h3>{category}</h3>
      <p>Hola mundo</p>
    </>
  )
}
