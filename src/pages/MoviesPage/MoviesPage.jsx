import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMovies } from "../../services/api";
import { useDebounce } from "use-debounce";
import MovieList from "../../asda/MovieList/MovieList";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const [debouncedQuery] = useDebounce(query, 300);
  const changeSearchQuery = (event) => {
    const newQuery = event.target.value;

    const nextSearchParams = new URLSearchParams(searchParams);
    nextSearchParams.set("query", newQuery);
    setSearchParams(nextSearchParams);
  };
  useEffect(() => {
    if (!debouncedQuery) return;

    setLoading(true);
    getMovies(debouncedQuery)
      .then((res) => {
        console.log(res);
        setMovies(res.results);
      })
      .catch((err) => {
        console.error("Ошибка при получении фильмов:", err);
      })
      .finally(() => setLoading(false));
  }, [debouncedQuery]);
  return (
    <div>
      <input type="text" value={query} onChange={changeSearchQuery}></input>
      {loading && <p>Loading...</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
