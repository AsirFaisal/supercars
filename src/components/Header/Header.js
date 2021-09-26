import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h1 className="name">The Garage Builder </h1>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#6441a5"
          fill-opacity="1"
          d="M0,64L48,58.7C96,53,192,43,288,74.7C384,107,480,181,576,176C672,171,768,85,864,48C960,11,1056,21,1152,53.3C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Header;
