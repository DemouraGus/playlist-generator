export default function SetlistsList({ setlists }) {
  if (!setlists || setlists.length === 0) {
    return <p>No setlists found.</p>;
  }
  return (
    <ul>
      {setlists.map((setlist, index) => (
        <li key={index}>{setlist.venue?.name} - {setlist.eventDate}</li>
      ))}
    </ul>
  )
}