import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMovie = async () => {
    const moviesData = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    const movieFinal = moviesData.data.movie;
    setMovies(movieFinal);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  const { title, medium_cover_image, runtime } = movie;
  return loading ? (
    <strong>loading</strong>
  ) : (
    <div>
      <h1>{title}</h1>
      <img src={medium_cover_image} alt={id} />
      <div>{`상영시간 : ${runtime}분`}</div>
    </div>
  );
}
export default Detail;
