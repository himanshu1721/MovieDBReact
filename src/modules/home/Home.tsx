import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header/Header";
import { fetchPopular, fetchTrending } from "../../features/content/services";
import { getTopRated } from "../../features/topRated/services";
import Section from "./components/sectionList/SectionList";
import "./Home.css";

export const Home = () => {
  const movies = useSelector((state) => state?.popular?.popular);
  const topRated = useSelector((state) => state?.topRated?.topRatedMovies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopular({ page: 1, isCurrentUserAdult: false }));
    dispatch(getTopRated({ isCurrentUserAdult: true }));
  }, []);

  return (
    <>
      <Header />
      <div className="Home">
        <Section movieList={movies}/>
        <div className="Item-separator"></div>
        <Section movieList={topRated} />
      </div>
    </>
  );
};

export default Home;
