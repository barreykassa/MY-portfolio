import React, { useState, useRef } from "react";
import "./css/navBarComp.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Blog from "./Blog";
import Contact from "./Contact";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdBackspace } from "react-icons/io";
import Projects from "./Projects";

export default function NavBarComp() {
  const [toggle, setToggle] = useState(true);
  const toggleHandler = () => {
    setToggle(!toggle);
  };
  // console.log(toggle);
  return (
    <BrowserRouter>
      <div>
        <div className="navbar">
          <p className="toggle-icon" onClick={toggleHandler}>
            {toggle ? <IoMdBackspace /> : <AiOutlineMenu />}
          </p>
          <div className={toggle ? "nav-links" : "nav-linksToggle"}>
            <Link className="Link" to="/">
              HOME
            </Link>
            <Link className="Link" to="/about">
              ABOUT
            </Link>
            <Link className="Link" to="/projects" >
              PROJECTS
            </Link>
            <Link className="Link" to="/blog">
              BLOG
            </Link>
            <Link className="Link" to="/contact">
              CONTACT
            </Link>
          </div>
        </div>

        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/about" render={() => <About />} />
          <Route path="/projects" render={() => <Projects />} />
          <Route path="/blog" render={() => <Blog />} />
          <Route path="/contact" render={() => <Contact />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
