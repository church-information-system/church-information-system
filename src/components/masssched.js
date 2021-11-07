import React from 'react';
import { Link } from 'react-router-dom';

// PAGES
import Header from './layout/header';
import Footer from './layout/footer';

import facebook_live from './../assets/images/Facebook_Live.png';

import donateicon from './../assets/images/donateicon.png';


export default function MassSched() {
    return (
        <div className="schedule_main mt-5 mb-5">
            <div className="mass_sched_div">
                <h4 className="text-center">Parish and National Shrine of</h4>
                <h3 className="text-center">Our Lady of Sorrows</h3>
                <h5 className="text-center">Mass Schedules at PNSOLS</h5>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        {/* SCHED 1 */}
                        <div className="card">
                            <div className="card-header text-center">
                                <span>Daily</span>

                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item time">
                                    <span className="timeSched6">6 : 00 AM</span>
                                    <span className="live_icon">
                                        <img src={facebook_live} alt="facebook live" />
                                    </span>
                                </li>
                                <li className="list-group-item time">
                                    <span className="timeSched6">5 : 00 PM</span>
                                    <span className="live_icon">
                                        <img src={facebook_live} alt="facebook live" />
                                    </span>
                                </li>
                                <li className="list-group-item time">During Wednesday</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        {/* SCHED 2 */}
                        <div className="card">
                            <div className="card-header text-center">
                                <span>Friday</span>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item time">
                                    <span className="timeSched6">6 : 00 AM</span>
                                    <span className="live_icon">
                                        <img src={facebook_live} alt="facebook live" />
                                    </span>
                                </li>
                                <li className="list-group-item time">
                                    <span className="timeSched6">8 : 00 AM</span>
                                    <span className="live_icon">

                                    </span>
                                </li>
                                <li className="list-group-item time">
                                    <span className="timeSched6">5 : 00 PM</span>
                                    <span className="live_icon">
                                        <img src={facebook_live} alt="facebook live" />
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        {/* SCHED 3 */}
                        <div className="card">
                            <div className="card-header text-center">
                                <span>First Friday</span>

                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item time">
                                    <span className="timeSched6">6 : 00 AM</span>
                                    <span className="live_icon">
                                        <img src={facebook_live} alt="facebook live" />
                                    </span>
                                </li>
                                <li className="list-group-item time">
                                    <span className="timeSched6">8 : 00 AM</span>
                                    <span className="live_icon">
                                    </span>
                                </li>
                                <li className="list-group-item time">
                                    <span className="timeSched6">10 : 00 AM</span>
                                    <span className="live_icon">
                                        <img src={facebook_live} alt="facebook live" />
                                    </span>
                                </li>
                                <li className="list-group-item time">
                                    <span className="timeSched6">5 : 00 PM</span>
                                    <span className="live_icon">
                                        <img src={facebook_live} alt="facebook live" />
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        {/* SCHED 4 */}
                        <div className="card">
                            <div className="card-header text-center">
                                <span>Sunday</span>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item time">
                                    <span className="timeSched6">6 : 00 AM</span>
                                    <span className="live_icon">
                                        <img src={facebook_live} alt="facebook live" />
                                    </span>
                                </li>
                                <li className="list-group-item time">
                                    <span className="timeSched6">8 : 00 AM</span>
                                    <span className="live_icon">
                                    </span>
                                </li>
                                <li className="list-group-item time">
                                    <span className="timeSched6">10 : 00 AM</span>
                                    <span className="live_icon">
                                        <img src={facebook_live} alt="facebook live" />
                                    </span>
                                </li>
                                <li className="list-group-item time">
                                    <span className="timeSched6">5 : 00 PM</span>
                                    <span className="live_icon">
                                        <img src={facebook_live} alt="facebook live" />
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            {/* FLOATING DONATION ICON */}

            <Link to="/donate" className="donate_icon">
                <img src={donateicon} alt="donate here" />
                <div className="donate_tooltip">
                    Click here to donate
                </div>
            </Link>
        </div>
    )
}