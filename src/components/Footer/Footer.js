import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-icons'>
        <i class='fab fa-facebook-f fa-lg'></i>
        <i class='fab fa-instagram fa-lg'></i>
        <i class='fab fa-twitter fa-lg'></i>
        <i class='fab fa-youtube fa-lg'></i>
      </div>
      <div className='footer-links'>
        <a href='/'>Audio and Subtitles</a>fa-
        <a href='/'>Audio Description</a>
        <a href='/'>Help Centre</a>
        <a href='/'>Gift Cards</a>
        <a href='/'>Media Centre</a>
        <a href='/'>Investor Relations</a>
        <a href='/'>Jobs</a>
        <a href='/'>Terms of Use</a>
        <a href='/'>Privacy</a>
        <a href='/'>Legal Notices</a>
        <a href='/'>Cookie Preferences</a>
        <a href='/'>Corporate Information</a>
        <a href='/'>Contact Us</a>
      </div>
      <button>Service Code</button>
      <p>@Netflix.mahi,Inc</p>
    </div>
  );
};

export default Footer;
