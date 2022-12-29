import React from "react";
import { getValidNumber, returnColor } from "../../../../utils/helperFunctions";
import "./UserRating.css";
const UserRating = ({ vote }) => {
  return (
    <div className="User-rating">
      <p>User Rating: </p>
      <p
        style={{
          marginLeft: "2%",
          fontSize: "x-large",
          fontWeight: "600",
          color: `${returnColor(vote).colour}`,
        }}
      >
        {getValidNumber(vote)}%
      </p>
    </div>
  );
};

export default UserRating;
