import React from "react";
import "./Navbar.css";
const Navbar = () => {
  document.addEventListener("scroll", () => {
    document.documentElement.dataset.scroll = window.scrollY;

    if (window.scrollY == 0) {
      document.querySelector(".nav-container").classList.add("nav-transparent");
    } else {
      document
        .querySelector(".nav-container")
        .classList.remove("nav-transparent");
    }
  });

  return (
    <div className='nav-container'>
      <div className='nav-bar'>
        <div className='nav-brand'>
          <img src='netflix-logo.png'></img>
          <a href='/'>Home</a>
          <a href='/'>TV Shows</a>
          <a href='/'>Movies</a>
          <a href='/'>New & Popular</a>
          <a href='/'>My List</a>
        </div>
        <div className='nav-profile'>
          <i class='fas fa-search fa-lg'></i>
          <i class='fas fa-bell fa-lg'></i>
          <i class='fas fa-user fa-lg'></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
