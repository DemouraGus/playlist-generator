export default function SearchForm({ handleSubmit, inputValue, setInputValue }) {
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter Artist Name"
       />
       <button type="submit">Search</button>
    </form>
  )
}