import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";

function App() {

  return (
    <>
      <div className="homeParent d-flex">
        <section className="home-sidebar">
          <Sidebar />
        </section>

        <section className="home-content">
          <Content />
        </section>
      </div>
    </>
  );
}

export default App;
