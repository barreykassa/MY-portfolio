import React from "react";
import "./css/progressBar.css";

export default function ProgressBar({ done }) {
  return (
    <div className="progress-barContainer">
      <div className="progress-bar">
        <div className="progress-bar inner" id="html">
          <div>HTML</div>
        </div>
      </div>
      {/* -------- */}
      <div className="progress-bar">
        <div className="progress-bar inner" id="css">
          <div>CSS</div>
        </div>
      </div>{" "}
      <div className="progress-bar">
        <div className="progress-bar inner" id='react'>
          <div>REACT</div>
        </div>
      </div>{" "}
      <div className="progress-bar">
        <div className="progress-bar inner" id='js'>
          <div>JAVASCRIPT</div>
        </div>
      </div>{" "}
      <div className="progress-bar">
        <div className="progress-bar inner" id='nodejs'>
          <div>NodeJs</div>
        </div>
      </div>{" "}
      <div className="progress-bar">
        <div className="progress-bar inner" id='mysql'>
          <div> MySql</div>
        </div>
      </div>{" "}
      <div className="progress-bar">
        <div className="progress-bar inner" id='sql'>
          <div>SQL</div>
        </div>
      </div>
      <div className="progress-bar">
        <div className="progress-bar inner" id='rest'>
          <div>RESTAPI</div>
        </div>
      </div>
    </div>
  );
}
