import React from "react";
import logo from "./logo.svg";
//import ReactDOM from "react-dom";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./App.js";
import Gdpr from "./Gdpr.js";
import "./App.css";
import logopng from "./logo-png.png";

function App() {
  return (
    <div className="App">
      <nav className="nav-bar">
        <div className="logo-png">
          <img src={logopng} alt="designpoint-logo"></img>
        </div>
        <div className="burger-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div className="logo">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 253.92 237.91"
        >
          <style type="text/css"></style>
          <g>
            <path
              className="st0"
              d="M253.92,229.43c0,0-213.74-95.11-145.12-214.66C222.45-46.18,103.45,92.58,253.92,229.43z"
            />
            <path
              className="st1"
              d="M251.86,228.04c0,0-229.39-45.95-188.64-177.64C160.74-33.96,75.05,127.51,251.86,228.04z"
            />
            <path
              className="st2"
              d="M248.29,227.41c0,0-233.92,3.61-221.94-133.72C103.82-9.4,54.22,166.54,248.29,227.41z"
            />
            <path
              className="st3"
              d="M245.73,227.2c0,0-227.52,54.46-245.73-82.18C53.16,27.53,43.06,210.05,245.73,227.2z"
            />
          </g>
        </svg>
      </div>
      <div className="patient">
        <p>Kis türelmet kérünk, fejlesztés alatt...</p>
      </div>

      <div className="main-container">
        <div className="black">
          <div className="l-title">
            <p>Grafikai tervezés</p>
            <p>Arculattervezés | Webdesign | Logo tervezés | Névjegykártya | Szórólap | Grafika | Csomagolástervezés | Illusztráció</p>
          </div>

          <p className="text">
            
          </p>
        </div>

        <div className="white">
          <div className="l-title"></div>

          <p className="text-gray">Frontend fejlesztés</p>
          <p className="text-gray">Weboldalkészítés | Landing page | Animált tartalom | Webes applikáció</p>
        </div>
      </div>

      <div className="footer">
        <div className="DesignPoint">DesignPoint</div>
        <div className="Kapcsolat">Kapcsolat</div>
        <div className="GDPR">GDPR</div>
      </div>
    </div>
  );
}

export default App;
