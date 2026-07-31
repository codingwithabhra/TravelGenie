import React from "react";
import "../App.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Content from "../components/Content/Content";
import Planmytrip from "../components/Planmytrip/Planmytrip";

const PlanMyTrip = () => {
  return (
    <div className="homeParent d-flex">
      <section className="home-sidebar">
        <Sidebar />
      </section>

      <section className="home-content">
        <Planmytrip />
      </section>
    </div>
  );
};

export default PlanMyTrip;
