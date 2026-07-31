import React, { useState } from "react";
import "./TripPlannerForm.css";
import { GiCommercialAirplane } from "react-icons/gi";

const destinations = [
  "Paris, France",
  "Madrid, Spain",
  "Rome, Italy",
  "London, England",
  "Barcelona, Spain",
  "Amsterdam, Netherlands",
  "Berlin, Germany",
  "Prague, Czech Republic",
  "Vienna, Austria",
];

const durations = [2, 3, 4, 5];

const TripPlannerForm = ({ onGenerate }) => {
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!destination || !duration) return;

    onGenerate({
      destination,
      duration,
    });
  };

  return (
    <form className="tripPlannerForm" onSubmit={handleSubmit}>
      <h1>
        <GiCommercialAirplane />
        <span className="ms-4">Choose Destination</span>
      </h1>
      <hr />
      <div className="row g-3 align-items-end">
        <div className="col-lg-5">
          <label className="form-label text-white">Destination</label>

          <select
            className="form-select"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          >
            <option value="" disabled>
              Choose Destination
            </option>

            {destinations.map((place) => (
              <option key={place} value={place}>
                {place}
              </option>
            ))}
          </select>
        </div>

        <div className="col-lg-3">
          <label className="form-label text-white">Duration</label>

          <select
            className="form-select"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          >
            <option value="">Choose Duration</option>

            {durations.map((day) => (
              <option key={day} value={day}>
                {day} Days
              </option>
            ))}
          </select>
        </div>

        <div className="col-lg-4">
          <button
            className="btn btn-success w-100"
            disabled={!destination || !duration}
          >
            Generate Trip
          </button>
        </div>
      </div>
    </form>
  );
};

export default TripPlannerForm;
