import { Link } from "react-router-dom";

export default function SetlistsList({ setlists }) {
  if (!setlists || setlists.length === 0) {
    return <p>No setlists found.</p>;
  }
  return (
    <ul>
      {setlists.map((setlist) => (
        <li key={setlist.id}>
          <Link to={`/setlists/${setlist.id}`}>
            {setlist.venue?.name} - {setlist.eventDate}
          </Link>
        </li>
      ))}
    </ul>
  );
}
