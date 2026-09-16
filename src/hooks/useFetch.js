import { useState, useEffect } from "react";

export function useFetch(fetchFn) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      try {
        const result = await fetchFn();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err.message || "An error occurred while fetching data");
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, [fetchFn]);

  return { data, isLoading, error };
}
