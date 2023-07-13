import { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
          headers: {
            'X-Api-Key': 'iWg2VIlyTvprv1IJpuPohA==Xj5JTp5CqGZqGb6F',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch quote');
        }

        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.length);
        setQuote(data[randomIndex]?.quote || ''); // Use optional chaining to avoid errors if the data or quote is not available
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchQuote();
    return () => {
      // Cleanup function
    };
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  return <div className="quote">{quote}</div>;
};

export default Quote;
