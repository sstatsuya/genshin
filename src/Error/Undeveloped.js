import React from "react";
import undevelopedImg from "../Assets/Images/undeveloped.gif";
import "./style.css";

const Undeveloped = () => {
  return (
    <div className="undeveloped">
      <div className="row">
        <div className="col">
          <li className='undeveloped-notice'>Tính năng này đang được phát triển</li>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <img
            className="undeveloped-img my-auto mx-auto d-block"
            src={undevelopedImg}
            alt="undeveloped"
          />
        </div>
      </div>
    </div>
  );
};

export default Undeveloped;
