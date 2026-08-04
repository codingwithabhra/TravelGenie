import React from "react";
import "../App.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Content from "../components/Content/Content";
import Planmytrip from "../components/Planmytrip/Planmytrip";
import MobileNavbar from "../components/Sidebar/MobileNavbar";

const PlanMyTrip = () => {
  return (
    <>
      {/* Mobile Navbar */}
      <div className="d-md-none">
        <MobileNavbar />
      </div>

      <div className="homeParent d-flex">
        {/* Sidebar (Tablet & Desktop) */}
        <section className="home-sidebar">
          <Sidebar />
        </section>

        {/* Content */}
        <section className="home-content">
          <Planmytrip />
        </section>
      </div>
    </>
  );
};

export default PlanMyTrip;
