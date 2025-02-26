import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/ping")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="App">
      <nav>This is the nav bar</nav>
      <h1>{message || "Loading..."}</h1>

    </div>
  )
};

export default App
