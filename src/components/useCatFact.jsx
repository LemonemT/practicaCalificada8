import { useState, useEffect } from 'react';

const CAT_FACT_ENDPOINT = 'https://catfact.ninja/fact';

export function useCatFact() {
  const [fact, setFact] = useState('');

  useEffect(() => {
    fetchCatFact();
  }, []);

  const fetchCatFact = () => {
    fetch(CAT_FACT_ENDPOINT)
      .then(res => res.json())
      .then(data => {
        setFact(data.fact);
      })
      .catch(error => {
        console.error('Error fetching cat fact:', error);
      });
  };

  return [fact, fetchCatFact];
}
