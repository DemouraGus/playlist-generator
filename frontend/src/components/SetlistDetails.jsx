import { useParams } from "react-router-dom";

export default function SetlistDetails({ setlists }) {
  const { id } = useParams();
  const setlist = setlists.find((s) => s.id === id);

  if (!setlist) {
    return <p>Setlist not found.</p>;
  }

  return (
    <div>
      <h2>Setlist Details</h2>
      <p><strong>Date:</strong> {setlist.eventDate}</p>
      <p><strong>Venue:</strong> {setlist.venue?.name}</p>
      <p><strong>City:</strong> {setlist.venue?.city?.name}</p>
      <p><strong>Country:</strong> {setlist.venue?.city?.country?.name}</p>

      <h3>Songs Played:</h3>
      {setlist.sets?.set?.length > 0 ? (
        <ul>
          {setlist.sets.set.flatMap((set, index) =>
            set.song.map((song, songIndex) => (
              <li key={`${index}-${songIndex}`}>{song.name}</li>
            ))
          )}
        </ul>
      ) : (
        <p>No songs available.</p>
      )}
    </div>
  );
}
