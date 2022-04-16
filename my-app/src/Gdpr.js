import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./App.js";



function Gdpr(){
    return (
        <div className="gdpr">
        <div className="gdpr-text">

        </div>

        <div className="footer">
                <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>

        </div>
        </div>

    );
}

export default Gdpr;