import AppConstants from "../../../../constants/AppConstants";
import { refactorDate } from "../../../../utils/helperFunctions";
import { useNavigate } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const openProfile = (id: number) => {
    navigate(`detail/${id}`);
  };
  const { title, poster_path, release_date } = movie;
  const support = title.length > 29;
  return (
    <div
      onClick={() => openProfile(movie?.id)}
      className="Movie-card"
    >
      <img
        alt={"Movie Poster"}
        className="Movie-card-image"
        src={`${AppConstants.API_IMAGE}${poster_path}`}
      />
      <div className="Movie-title">
        {title.substring(0, 30)}
        {support ? "..." : null}
      </div>
      <div className="Movie-date">{refactorDate(release_date)}</div>
    </div>
  );
};

export default MovieCard;
