import React from "react";
import Logo from "./csitlogo.png";

export default () => {
  return (
    <div className="container">
      <div className="left">
        <img src={Logo} alt="Logo"></img>
      </div>
      <div className="right">
        <p>
          <b>CSITAN</b> @csitan Sep 10
          <p>Learning React? Start Small</p>
          <p>author: @venom</p>
        </p>
        <div className="imgx">
          <img className="imgl" src={Logo} alt="Logo in pic"></img>
          <p className="tex">Learning React? Start Small</p>
        </div>
        <p>
          <b>Learning react? Start Small</b>
          <p>
            <a href="tuiost.io">Link to csit</a>
          </p>
        </p>
      </div>
    </div>
  );
};
