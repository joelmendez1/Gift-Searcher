import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <h1>Gift Expert App</h1>
      <AddCategory
        onNewCategory={onAddCategory}
      />
      {categories.map((category) => <GifGrid category={category}/>
      )}
    </>
  )
}
