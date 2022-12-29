import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import {
  LeftArrow,
  RightArrow,
} from "../../../detail/components/arrows/arrows";
import MovieCard from "../movieCard/MovieCard";
import "./SectionList.css";

const Section = ({ movieList }) => {
  return (
    <div>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {movieList.map((element) => {
          return <MovieCard movie={element} />;
        })}
      </ScrollMenu>
    </div>
  );
};

export default Section;

/*


const Section = ({ movieList, title }) => {
  return (
    <div>
      <h2 className="Title">{title}</h2>
      <div className="Movie-list">
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {movieList.map((element) => {
            return <MovieCard movie={element} />;
          })}
        </ScrollMenu>
      </div>
    </div>
  );
};

*/
