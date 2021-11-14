import React from 'react';
import { Link } from 'react-router-dom';

import MassScheduleMain from '../massschedule';

import nsols from './../../assets/images/nsols.jpg';
import pyf from './../../assets/images/pyf.jpg';


export default function Header() {
    return (
        <header>
            <div className="header mlr">
                <div className="logo_div">
                    <img src={nsols} alt="logo" className="logo_size" />
                </div>
                <div className="navBar">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <div className="nav_btn">
                                    <Link to="/massschedule">
                                        <button type="button" className="mass_sched">
                                            Mass Schedule
                                        </button>
                                    </Link>
                                </div>
                                <ul className="navbar-nav">
                                    <Link to="/" className="nav-item">
                                        <a className="nav-link" aria-current="page">HOME</a>
                                    </Link>
                                    <Link to="/about" className="nav-item">
                                        <a className="nav-link">ABOUT US</a>
                                    </Link>
                                    <Link to="/posts" className="nav-item">
                                        <a className="nav-link">POSTS</a>
                                    </Link>
                                    <Link to="/events" className="nav-item">
                                        <a className="nav-link">EVENTS</a>
                                    </Link>
                                    <Link to="/virtualtour" className="nav-item">
                                        <a className="nav-link">VIRTUAL TOUR</a>
                                    </Link>
                                    <Link to="/request" className="nav-item">
                                        <a className="nav-link">REQUEST</a>
                                    </Link>
                                    <Link to="/donate" className="nav-item">
                                        <a className="nav-link">DONATE</a>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                
            </div>
        </header>
    )
}