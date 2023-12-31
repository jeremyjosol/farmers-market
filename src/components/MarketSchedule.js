import React from "react";
import PropTypes from "prop-types";

const MarketSchedule = (props) => {

  const marketSchedule = [
    {
      day: "Sunday",
      location: "Lents International",
      hours: "9:00am - 2:00pm",
      booth: "4A"
    },
    {
      day: "Monday",
      location: "Pioneer Courthouse Square",
      hours: "10:00am - 2:00pm",
      booth: "7C"
    },
    {
      day: "Tuesday",
      location: "Hillsboro",
      hours: "5:00pm - 8:30pm",
      booth: "1F"
    },
    {
      day: "Wednesday",
      location: "Shemanski Park",
      hours: "10:00am - 2:00pm",
      booth: "3E"
    },
    {
      day: "Thursday",
      location: "Northwest Portland",
      hours: "2:00pm - 6:00pm",
      booth: "6D"
    },
    {
      day: "Saturday",
      location: "Beaverton",
      hours: "10:00am - 1:30pm",
      booth: "9G"
    }
  ];


MarketSchedule.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
}

const scheduleForTheMonth = 
  <ul>
    {marketSchedule.map((schedule, index) =>
      <li key={index}>{schedule}</li>
    )}
  </ul>

return (
  <React.Fragment>
  <div className="schedule-container">
      {scheduleForTheMonth}
  </div>
  </React.Fragment>
);
}

export default MarketSchedule;
