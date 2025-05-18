import { Link, useLocation } from "react-router-dom";

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <div>
      {movies.length > 0 && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={location}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
