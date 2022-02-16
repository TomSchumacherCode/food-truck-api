import { useState, useEffect } from "react";

const baseUrl =
  "https://api.giphy.com/v1/gifs/search?api_key=DtwTkZwAIfcbYylnIlpb5tczU7Y3MH8n&limit=25&offset=0&rating=r&lang=en&q=";

export default function useFetch(search) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);

      if (search.length === 0) {
        setLoading(false);
        return;
      }
      setData(null);
      setError(null);
      try {
        const response = await fetch(baseUrl + search);
        const json = await response.json();
        const gifs = json.data.map((val) => ({
          id: val.id,
          title: val.title,
          url: val.images.original.url,
        }));
        setData(gifs);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [search]);
  return { data, error, loading };
}
