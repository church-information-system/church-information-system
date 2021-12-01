import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// PAGES
import Header from "./layout/header";
import Footer from "./layout/footer";

import donateicon from "./../assets/images/donateicon.png";
import ScheduleCard from "./schedule-card";
import { fetchSchedules } from "../api/FirebaseHelper";

export default function MassSched() {
  const [sched, setSched] = useState([]);
  useEffect(async () => setSched(await fetchSchedules()), []);

  return (
    <div className="schedule_main mt-5 mb-5">
      <div className="mass_sched_div">
        <h4 className="text-center">Parish and National Shrine of</h4>
        <h3 className="text-center">Our Lady of Sorrows</h3>
        <h5 className="text-center">Mass Schedules at PNSOLS</h5>
        <div>
          {sched.map((item) => (
            <ScheduleCard record={item}></ScheduleCard>
          ))}
        </div>
      </div>

      {/* FLOATING DONATION ICON */}

      <Link to="/donate" className="donate_icon">
        <img src={donateicon} alt="donate here" />
        <div className="donate_tooltip">Click here to donate</div>
      </Link>
    </div>
  );
}
