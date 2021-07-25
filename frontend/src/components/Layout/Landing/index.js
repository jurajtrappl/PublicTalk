import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/imgs/logo.png';

import './index.css';

function Landing() {
    return (
        <div style={{ height: "calc(100vh - 60px)" }} className="container justify-content-center">
            <div className="row justify-content-center text-center">
                <img src={logo} style={{ height: "400px", width: "400px" }} alt="Smalltalk logo" />
            </div>
            <div className="row">
                <h1 className="text-center" style={{ fontFamily: "Brush Script MT, cursive", fontSize: "100px", color: "#290849" }}>PublicTalk</h1>
            </div>
            <div className="row">
                <div className="col-6 text-center">
                    <Link to="/register" className="btn button">
                        Register
                    </Link>
                </div>
                <div className="col-6 text-center">
                    <Link to="/login" className="btn button">
                        Log in
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default Landing;