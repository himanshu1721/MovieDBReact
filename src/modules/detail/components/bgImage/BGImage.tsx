import React from "react";
import AppConstants from "../../../../constants/AppConstants";
const BackgroundImage = ({ poster_path }) => {
  return (
    <div
      style={{
        flex: 5,
      }}
    >
      <div
        style={{
          display: "inline-block",
          position: "absolute",
        }}
      >
        <img
          style={{
            opacity: 1,
            height: "500px",
            margin: "15%",
            borderRadius: "20px",
          }}
          src={`${AppConstants.API_IMAGE}${poster_path}`}
        />
      </div>
      <div style={{ opacity: 0.2 }}>
        <img
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
          }}
          src={`${AppConstants.API_IMAGE}${poster_path}`}
        />
      </div>
    </div>
  );
};

export default BackgroundImage;
