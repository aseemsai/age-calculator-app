import arrowIcon from "./images/icon-arrow.svg";
import { useState, useEffect } from "react";

function App() {
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);

  function handleDayChange(e) {
    setDay(e.target.value);
  }
  function handleMonthChange(e) {
    setMonth(e.target.value);
  }
  function handleYearChange(e) {
    setYear(e.target.value);
  }

  useEffect(() => {
    console.log(day, month, year);
    return console.log("The app is closed.");
  });

  return (
    <div className="App">
      <form className="date-form">
        <div>
          <label htmlFor="day">DAY</label>
          <input
            type="number"
            name="day"
            id="day"
            placeholder="DD"
            onChange={handleDayChange}
          />
        </div>
        <div>
          <label htmlFor="month">MONTH</label>
          <input
            type="number"
            name="month"
            id="month"
            placeholder="MM"
            onChange={handleMonthChange}
          />
        </div>
        <div>
          <label htmlFor="year">YEAR</label>
          <input
            type="number"
            name="year"
            id="year"
            placeholder="YYYY"
            onChange={handleYearChange}
          />
        </div>
      </form>
      <div className="divider">
        <hr></hr>
        <img src={arrowIcon} alt="arrow icon" />
      </div>
      <div className="result">
        <div className="result-year">YY years</div>
        <div className="result-month">MM months</div>
        <div className="result-day">DD {day === 1 ? "day" : "days"}</div>
      </div>
    </div>
  );
}

export default App;
