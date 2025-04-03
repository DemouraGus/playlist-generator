import { Routes, Route } from 'react-router-dom';
import useSetlists from './hooks/useSetlists';
import './App.css';
import SetlistsList from './components/SetlistsList';
import SearchForm from './components/SearchForm';
import NavigationBar from './components/NavigationBar';
import SetlistDetails from './components/SetlistDetails';

function App() {
  const {
    artist,
    inputValue,
    setInputValue,
    handleSubmit,
    setlists,
    loading,
    error
  } = useSetlists();

  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={
          <>
            <h1>{artist ? `Setlists for ${artist}` : "Search for setlists"}</h1>
            <SearchForm 
              handleSubmit={handleSubmit} 
              inputValue={inputValue} 
              setInputValue={setInputValue}
            />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            <SetlistsList setlists={setlists} />
          </>
        } />
        <Route path="/setlists" element={<SetlistsList setlists={setlists} />} />
        <Route path="/about" element={<h1>About This App</h1>} />
        <Route path="/setlists/:id" element={<SetlistDetails setlists={setlists} />}></Route>
      </Routes>
    </div>
  );
}

export default App
