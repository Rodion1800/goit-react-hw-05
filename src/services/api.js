import axios from "axios";

const token = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDI3NzgyNGM0MDVjMzIyMzgyOGM1NmMzYWUzNGRlYyIsIm5iZiI6MTc0NzU3MDU4My41NDEsInN1YiI6IjY4MjljZjk3OTg5Y2Y2NWM3ZWRiMjY4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xVId3rxAE0JEyYNwImoSSIOgEUnwtkWsJa_uGzBol98`;

const options = {
  headers: {
    Authorization: `Bearer ${token}`,
    accept: "application/json",
  },
};

export function getHomePageMovies() {
  const HomePageMovies =
    "https://api.themoviedb.org/3/trending/movie/day?include_adult=false&language=en-US";
  return axios
    .get(HomePageMovies, options)
    .then((response) => response.data)
    .catch((err) => {
      console.error("Ошибка при получении фильмов:", err);
      throw err;
    });
}

export function getMovieDetails(movieId) {
  const MovieIdDetail = `https://api.themoviedb.org/3/movie/${movieId}`;
  return axios
    .get(MovieIdDetail, options)
    .then((response) => response.data)
    .catch((err) => {
      console.error("Ошибка при получении фильмов:", err);
      throw err;
    });
}

export function getMovieCast(movieId) {
  const MovieIdDetailCast = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
  return axios
    .get(MovieIdDetailCast, options)
    .then((response) => response.data)
    .catch((err) => {
      console.error("Ошибка при получении фильмов:", err);
      throw err;
    });
}

export function getMovieReview(movieId) {
  const MovieIdDetailReview = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
  return axios
    .get(MovieIdDetailReview, options)
    .then((response) => response.data)
    .catch((err) => {
      console.error("Ошибка при получении фильмов:", err);
      throw err;
    });
}

export function getMovies(query) {
  const SearchMovies = `https://api.themoviedb.org/3/search/movie?query=${query}`;

  return axios
    .get(SearchMovies, options)
    .then((response) => response.data)
    .catch((err) => {
      console.error("Ошибка при получении фильмов:", err);
      throw err;
    });
}
