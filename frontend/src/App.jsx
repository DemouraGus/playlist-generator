import { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';

function App() {
  const [setlists, setSetlists] = useState([]);
  const API_KEY = import.meta.env.VITE_SETLISTFM_API_KEY;
  const BASE_URL = 'https://api.setlist.fm/rest/1.0'

  useEffect(() => {
    const fetchSetlists = async () => {
      try {
        const response = await axios.get(`${BASE_URL}search/setlists`, {
          params: { artistName: "Radiohead" },
          headers: {
            "x-api-key": API_KEY,
            Accept: "application/json",
          },
        });
        setSetlists(response.data.setlist || []);
      } catch (error) {
        console.error("Error fetching setlists:", error);
      }
    };
    
    fetchSetlists()
  }, [API_KEY]);

  return (
    <div className="App">
      <nav>This is the nav bar</nav>
      <h1>Setlists</h1>
      <ul>
        {setlists.length > 0 ? (
          setlists.map((setlist, index) => (
            <li key={index}>{setlist.venue?.name} - {setlist.eventDate}</li>
          ))
        ) : (
          <p>Loading or no results found...</p>
        )}
      </ul>
    </div>
  )
};

export default App
