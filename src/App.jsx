import React from 'react';
import { useCatFact } from './components/useCatFact';
import { useCatImage } from './components/useCatImage';
import './App.css';

export function App() {
  const [fact, fetchCatFact] = useCatFact();
  const [imageUrl, fetchCatImage] = useCatImage();

  const handleClick = () => {
    fetchCatFact();
    fetchCatImage();
  };

  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Get new fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted for fact: ${fact}`} />}
    </main>
  );
}
