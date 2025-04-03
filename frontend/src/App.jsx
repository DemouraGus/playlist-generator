import useSetlists from './hooks/useSetlists';
import './App.css';
import SetlistsList from './components/SetlistsList';
import SearchForm from './components/SearchForm';
import NavigationBar from './components/NavigationBar';

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
      <h1>{artist? `Setlists for ${artist}` : "Search for setlists"}</h1>
      <SearchForm 
        handleSubmit={handleSubmit} 
        inputValue={inputValue} 
        setInputValue={setInputValue}
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <SetlistsList setlists={setlists} />
    </div>
  )
};

export default App
