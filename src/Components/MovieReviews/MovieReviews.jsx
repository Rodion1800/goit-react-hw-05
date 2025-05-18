import { useEffect, useState } from "react";
import { getMovieReview } from "../../services/api";
import { useParams } from "react-router-dom";

export default function MovieReview() {
  const { movieId } = useParams();
  const [reviews, setMovieReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getMovieReview(movieId)
      .then((data) => {
        setMovieReviews(data.results);
        console.log("Fetched movie review:", data);
      })
      .catch((err) => {
        console.error("Ошибка при получении фильма:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);
  if (loading) return <p>Loading...</p>;
  if (!reviews.length) return <p>No reviews.</p>;

  return (
    <div>
      <h3>Reviews</h3>
      {reviews.length > 0 && (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>{review.author}</p>
              {review.content}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
