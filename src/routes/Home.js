import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMovie = async () => {
    const moviesData = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year"
      )
    ).json();
    const movieFinal = moviesData.data.movies;
    setMovies(movieFinal);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <strong>loading</strong>
      ) : (
        <div>
          {movies.map((movie, idx) => (
            <Movie
              id={movie.id}
              key={idx}
              title={movie.title}
              coverImg={movie.medium_cover_image}
              idx={idx}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
