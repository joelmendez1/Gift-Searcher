import { useEffect, useState } from "react";
import { getGifs } from "../utils/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getGifs(category)
      .then(res => setImages(res))
      .then(() => setIsLoading(false))
  }, [category])

  return {
    images,
    isLoading
  }
}
