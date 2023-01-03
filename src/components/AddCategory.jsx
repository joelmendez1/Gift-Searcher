import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newInputValue = inputValue.trim();

    if(newInputValue.length <= 1) return;

    onNewCategory(newInputValue);
    setInputValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
      type='text' 
      placeholder='Buscar gifs'
      value={inputValue}
      onChange={handleInputChange}
      />
    </form>
  )
}
