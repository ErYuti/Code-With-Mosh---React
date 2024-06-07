import React, { Component } from "react";

//stateless Functional components
const NavBar = ({totalCounters}) => {
  console.log('NavBar - render');
  return (
    <nav className="navbar navbar-light bg-light">
        <a href="#" className="navbar-brand ">
          NavBar <span className="badge badge-ill badge-secondary ">
          {totalCounters}
          </span>
        </a>
      </nav>
  );
};

export default NavBar;
