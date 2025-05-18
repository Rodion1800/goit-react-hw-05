import { Link, useLocation } from "react-router-dom";
import { getHomePageMovies } from "../../services/api";
import { useEffect, useState } from "react";
import MovieList from "../../asda/MovieList/MovieList";

export default function HomePage() {
  const location = useLocation();
  console.log("location:", location);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    getHomePageMovies()
      .then((res) => {
        console.log(res);
        setMovies(res.results);
      })
      .catch((err) => {
        console.error("Ошибка при получении фильмов:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Popular movies for today</h1>
      {loading && <strong>Loading movies...</strong>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
