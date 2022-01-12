import React from "react";
import "./style.css";
import fullLogo from "../Assets/Images/full-logo.png";

const Footer = () => {
  return (
    <div className="row">
      <div className="col footer">
        <img className="footer__logo" src={fullLogo} alt="logo" />
        <p>
         This web is made by LMT, based on Genshin API of{" "}
          <u>genshin.dev</u>
        </p>
      </div>
    </div>
  );
};

export default Footer;
