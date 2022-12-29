import React from "react";
const Overview = ({ overview }: { overview: String }) => {
  return (
    <>
      <h4>Overview</h4>
      <p>{overview}</p>
    </>
  );
};

export default Overview;
