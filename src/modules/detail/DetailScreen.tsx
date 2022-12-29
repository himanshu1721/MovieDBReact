import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovie } from "../../features/detail/services";
import BackgroundImage from "./components/bgImage/BGImage";
import Genres from "./components/genres/Genres";
import MovieTitle from "./components/movieTitle/MovieTitle";
import Overview from "./components/overview/Overview";
import ReleaseDateAndRuntime from "./components/releaseDateAndRuntime/ReleaseDateAndRuntime";
import UserRating from "./components/userRating/UserRating";
import "./DetailScreen.css";

export const DetailScreen = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state?.detail?.movieDetails);
  const loading = useSelector((state) => state?.detail?.loading);

  useEffect(() => {
    dispatch(fetchMovie({ movieID: params.id }));
  }, [params.id, dispatch]);

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <div className="Main">
          <div style={{ flex: 2, padding: "10px" }}>
            <MovieTitle title={movie.title} release={movie.release_date} />
            <UserRating vote={movie.vote_average} />
            <ReleaseDateAndRuntime
              release_date={movie.release_date}
              runtime={movie.runtime}
            />
            {/* <Genres genres={movie.genres} /> */}
            <Overview overview={movie.overview} />
          </div>
          <BackgroundImage poster_path={movie.poster_path} />
        </div>
      )}
    </>
  );
};
