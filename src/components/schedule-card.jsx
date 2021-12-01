import facebook_live from "./../assets/images/Facebook_Live.png";

export default function ScheduleCard({ record }) {
  function getTimeList() {
    let timeKeys = Object.keys(record).filter((key) => key.includes("time"));
    timeKeys.sort((a, b) => {
      if (a.length !== b.length) {
        return a.length - b.length;
      } else {
        return a > b;
      }
    });

    let times = [];
    timeKeys.forEach((key) => {
      times.push(record[key]);
    });
    return times;
  }
  return (
    <div
      className="col-lg-6 col-md-6 col-sm-12"
      style={{ margin: "20px auto" }}
    >
      {/* SCHED 1 */}
      <div className="card">
        <div className="card-header text-center">
          <span>{record.day}</span>
        </div>
        <ul className="list-group list-group-flush">
          {getTimeList().map((time) => (
            <TimeSched time={time} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function TimeSched({ time }) {
  return (
    <li className="list-group-item time">
      <span className="timeSched6">{time}</span>
      <span className="live_icon">
        <img src={facebook_live} alt="facebook live" />
      </span>
    </li>
  );
}
