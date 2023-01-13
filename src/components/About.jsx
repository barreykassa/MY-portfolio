import React from "react";
import "./css/about.css";
import { GiSpeedometer } from "react-icons/gi";
import { DiResponsive } from "react-icons/di";
import { BiBulb } from "react-icons/bi";
import { SlRocket } from "react-icons/sl";
import ProgressBar from "./ProgressBar";

export default function About() {
  return (
    <div className="containerAbout">
      <div className="title">
        <h1>ABOUT</h1>
        <p>_____________</p>
      </div>
      {/* icons----------------------------------------------- */}
      <div className="iconsContainer">
        <div className="fast">
          <GiSpeedometer id="line" />
          <h4>Fast</h4>
          <p>
            fast load times and lag free
            <br /> interction, my highest priority
          </p>
        </div>
        <div className="fast">
          <DiResponsive id="line" />
          <h4>Responsive</h4>
          <p>
            My layouts will work on any
            <br />
            device, big or small.
          </p>
        </div>
        <div className="fast">
          <BiBulb id="line" />
          <h4>Intuitive</h4>
          <p>
            Strong preference for easy to
            <br /> use, intuitive UX/UI.
          </p>
        </div>
        <div className="fast">
          <SlRocket id="line" />
          <h4>Dynamic</h4>
          <p>
            Websites don't have to be static, I love
            <br /> making pages come to life.
          </p>
        </div>
      </div>
      {/* image and progress-bar----------------------------------------------- */}
      <div className="imgAndpercentage">
        <div className="imgAndH4P">
          <img
            // src="https://cdn.pixabay.com/photo/2016/11/29/09/32/man-1868730__340.jpg"
            src="https://cdn.pixabay.com/photo/2016/11/29/09/32/man-1868730__340.jpg"
            alt=""
          />
          <br /> <h1>Who's this guy?</h1>
          <br />{" "}
          <p>
            I'm a junior Front-End Developer from jerusalem/TLV .
            <br />I have serious passion for UI effects, animations and creating{" "}
            <br />
            intuitive, dynamic user experiences.
            <br />
            <span> Let's make something special.</span>
          </p>
        </div>
        <div className="prBar">
          <ProgressBar />
        </div>
      </div>
    </div>
  );
}
