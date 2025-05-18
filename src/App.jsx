import Navigation from "./Components/Navigation/Navigation";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MovieCast from "./Components/MovieCast/MovieCast";
import MovieReview from "./Components/MovieReviews/MovieReviews";
import GlobalStyles from "./GlobalStyles";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <>
      <GlobalStyles />
      <Navigation />
      <Suspense fallback={<p>Loading page....</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReview />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
