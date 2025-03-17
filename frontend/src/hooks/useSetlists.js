import { useEffect, useState } from "react";
import axios from 'axios';

const useSetlists = () => {
  const [artist, setArtist] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [setlists, setSetlists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!artist) return;

    const fetchSetlists = async () => {
      setLoading(true);
      setError(null);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setArtist(inputValue);
      setInputValue("");
    }
  };

  return {
    artist,
    inputValue,
    setInputValue,
    handleSubmit,
    setlists,
    loading,
    error
  };
};

export default useSetlists;