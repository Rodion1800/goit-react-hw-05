import { useEffect, useState } from "react";
import { getMovieCast } from "../../services/api";
import { useParams } from "react-router-dom";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setMovieCast] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getMovieCast(movieId)
      .then((data) => {
        setMovieCast(data.cast);
        console.log("Fetched movie cast:", data);
      })
      .catch((err) => {
        console.error("Ошибка при получении фильма:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);
  if (loading) return <p>Loading...</p>;
  if (!cast.length) return <p>No information.</p>;

  return (
    <div>
      <h3>Cast</h3>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            <p>
              <strong>{actor.name}</strong> — {actor.character}
            </p>
            {actor.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
