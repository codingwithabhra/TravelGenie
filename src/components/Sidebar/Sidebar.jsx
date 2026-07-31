import React from "react";
import { Link } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import "./Sidebar.css";
import { FaPersonWalkingLuggage } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div>
      <div className="logo">
        <img
          src="/TripGenie.png"
          alt="Logo"
          className="d-block m-auto py-4"
          style={{ maxWidth: "120px", objectFit: "cover" }}
        />
      </div>

      <ul className="navbar">
        <li className="w-100">
          <Link className="navLink text-decoration-none text-white" to="/">
            <IoIosHome size={21}/>
            <span className="ms-2 fw-bold">Home</span>
          </Link>
        </li>

        {/* PLAN TRIP */}
        <li className="w-100">
          <Link className="navLink text-decoration-none text-white" to="/planmytrip">
            <FaPersonWalkingLuggage size={21}/>
            <span className="ms-2 fw-bold">Plan my trip</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
