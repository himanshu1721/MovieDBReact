import React from "react";
import { getYear } from "../../../../utils/helperFunctions";
const MovieTitle = ({ title, release }) => {
  return (
    <p style={{ fontSize: "x-large" }}>
      <strong>{title}</strong>
      {` (${getYear(release)})`}
    </p>
  );
};

export default MovieTitle;
