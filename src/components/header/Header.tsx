import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <header className="Header-all">
      <div className="Header">
        <img
          className="AppLogo"
          src={require("../../assets/tmdbLogo.png")}
          alt="Logo"
        />
      </div>
    </header>
  );
};

export default Header;
