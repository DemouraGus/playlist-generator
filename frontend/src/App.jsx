import { useEffect, useState } from 'react';
import useSetlists from './hooks/useSetlists';
import './App.css';
import SetlistsList from './components/SetlistsList';

function App() {
  const [artist, setArtist] = useState("Radiohead");
  const { setlists, loading, error} = useSetlists(artist);

  return (
    <div className="App">
      <nav>This is the nav bar</nav>
      <h1>Setlists for {artist}</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <SetlistsList setlists={setlists} />
    </div>
  )
};

export default App
