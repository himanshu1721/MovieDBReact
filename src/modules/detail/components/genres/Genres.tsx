import React from "react";
import "./Genres.css";
const Genres = ({ genres }) => {
  return (
    <div className="Main">
      {genres.map((e) => {
        return <div className="Genres">{e.name}</div>;
      })}
    </div>
  );
};

export default Genres;
