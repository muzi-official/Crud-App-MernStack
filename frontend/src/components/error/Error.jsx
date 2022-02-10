import React from "react";
import "./error.css";
import errorImg from "../../images/errorImg.png";
import { NavLink } from "react-router-dom";
const Error = () => {
  return (
    <>
      <div className="container error">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-md-5">
            <img className="img-fluid" src={errorImg} alt="ErrorImag" />
            <h2>
              WE ARE <span>SORRY</span>, PAGE NOT FOUND!
            </h2>
            <br />
            <NavLink to="/">
              <i className="fas fa-arrow-left"> Go to Back</i>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
