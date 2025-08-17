import { Link } from "react-router-dom";

function Movie({ id, title, coverImg, idx, summary, genres }) {
  return (
    <div>
      <img alt={title} src={coverImg} />
      <h2 key={idx}>
        <Link to={`movie/${id}`}>{title}</Link>
      </h2>
      <div>{summary}</div>
      <ul>
        {genres.map((genre, idx) => (
          <li key={idx}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}
export default Movie;
