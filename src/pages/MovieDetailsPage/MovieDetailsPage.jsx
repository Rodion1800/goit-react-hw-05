import { useEffect, useRef, useState } from "react";
import { getMovieDetails } from "../../services/api";
import { Link, useParams, Outlet, useLocation } from "react-router-dom";

export default function MovieDetailsPage() {
  const location = useLocation();
  const backLinkRef = useRef(location.state);

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    getMovieDetails(movieId)
      .then((data) => {
        setMovie(data);
        console.log("Fetched movie:", data);
      })
      .catch((err) => {
        console.error("Ошибка при получении фильма:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  return (
    <div>
      {loading && <strong>Loading movie detail...</strong>}

      {!loading && movie && (
        <>
          <Link to={backLinkRef.current ?? "/movies"}>Go back</Link>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p>Rating: {movie.vote_average}</p>
          {movie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
          )}
        </>
      )}
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
