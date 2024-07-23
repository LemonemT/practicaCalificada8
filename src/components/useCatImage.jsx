import { useState, useEffect } from 'react';

const CAT_IMAGE_ENDPOINT = 'https://api.thecatapi.com/v1/images/search';

export function useCatImage() {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetchCatImage();
  }, []);

  const fetchCatImage = () => {
    fetch(CAT_IMAGE_ENDPOINT)
      .then(res => res.json())
      .then(data => {
        const [imageData] = data;
        setImageUrl(imageData.url);
      })
      .catch(error => {
        console.error('Error fetching cat image:', error);
      });
  };

  return [imageUrl, fetchCatImage];
}
