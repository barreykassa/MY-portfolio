import React, { useState } from "react";
import "./css/home.css";
import { BsArrowRightShort } from "react-icons/bs";
import { Redirect } from "react-router-dom";

export default function Home() {
  const [redirectTo, setRedirectTo] = useState(true);
  if (redirectTo === false) {
    return <Redirect to="/About" />;
  }
  return (
    <div
      className="containerHome"
      style={{height: "100vh",
      width: "100%",
        // backgroundImage:
        //   "url('https://cdn.pixabay.com/photo/2016/03/25/02/11/abstract-1278069__340.jpg')",
        // height: "100vh",
        // width: "100%",
        // backgroundSize: "cover",
      }}
    >
      <br />
      <div className="homeDiv">
        <h1 className="h3">
          Hello, I'm <span className="span">Bari Kassa.</span>
          <br />
          I'm full stack web developer
        </h1>
        <br />
        <button className="btn" onClick={() => setRedirectTo(false)}>
          View my work <BsArrowRightShort />
        </button>
      </div>
      {/* u can delete thise circle and the css circle and get the page back */}
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
