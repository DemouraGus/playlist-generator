import { useEffect, useState } from "react";
import axios from 'axios';

const useSetlists = (artist) => {
  const [setlists, setSetlists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSetlists = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/setlists", {
          params: { artist },
        });
        setSetlists(response.data.setlist || []);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSetlists();
  }, [artist]);

  return {
    setlists,
    loading,
    error
  };
};

export default useSetlists;