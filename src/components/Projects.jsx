import React, { useState, useEffect } from "react";
import "./css/projects.css";

export default function Projects() {
  const [all, setAll] = useState();
  const [react, setReact] = useState();
  const [js, setJs] = useState();
  const [nodejs, setNodeJs] = useState();

  const projectList = [
    {
      name: "Todo-list project",
      language: "react",
      img: "https://media.istockphoto.com/id/1361403684/pl/zdj%C4%99cie/stylowa-zamy%C5%9Blona-afroamerykanka-zastanawiaj%C4%85ca-si%C4%99-nad-pomys%C5%82em-na-zapisanie-do-notatnika.jpg?b=1&s=170667a&w=0&k=20&c=qE14v_A9J_4FOxcfoRun9qCxP4VDwFkWSmatqLAS3_M=",
      id: "0",
    },
    {
      name: "Tic-tac-toa game",
      language: "caltural-food",
      img: "https://cdn.pixabay.com/photo/2017/02/25/10/52/klee-2097443__340.jpg",
      id: "1",
    },
    {
      name: "Watch e-commerence",
      language: "JS",
      img: "https://cdn.pixabay.com/photo/2017/08/02/01/34/pocket-watch-2569573__340.jpg",
      id: "2",
    },
    {
      name: "caltural food",
      language: "JS",
      img: "https://cdn.pixabay.com/photo/2017/06/06/22/37/italian-cuisine-2378729__340.jpg",
      id: "3",
    },
    {
      name: "Mind&body website",
      language: "nodeJS",
      img: "https://cdn.pixabay.com/photo/2016/05/10/21/50/meditation-1384758__340.jpg",
      id: "4",
    },
    {
      name: "books store project",
      language: "nodeJS",
      img: "https://cdn.pixabay.com/photo/2016/09/08/22/43/books-1655783__340.jpg",
      id: "5",
    },
  ];
  useEffect(() => {
    allHandler();
  }, []);
  const allHandler = () => {
    projectList.map((item) => {
      if (item.id <= 5) {
        return (
          setAll(projectList), setReact(false), setJs(false), setNodeJs(false)
        );
      }
    });
  };
  const reactHandler = () => {
    const result = projectList.filter((item) => item.id <= 1);
    setReact(result);
    setAll(false);
    setJs(false);
    setNodeJs(false);
  };
  const jsHandelr = () => {
    const result = projectList.filter((item) => item.language == "JS");
    setJs(result);
    setReact(false);
    setAll(false);
    setNodeJs(false);
  };
  const nodeJsHandelr = () => {
    const result = projectList.filter((item) => item.language == "nodeJS");
    setNodeJs(result);
    setJs(false);
    setReact(false);
    setAll(false);
  };
  return (
    <div className="project-container">
      {" "}
      <div className="project-title">
        <h1>PROJECTS</h1>
        <p>_____________</p>
      </div>
      {/* -------------- */}
      <div className="navList-container">
        <div className="navList-container-div" onClick={allHandler}>
          All
        </div>
        <div className="navList-container-div" onClick={reactHandler}>
          React
        </div>
        <div className="navList-container-div" onClick={jsHandelr}>
          JS
        </div>
        <div className="navList-container-div" onClick={nodeJsHandelr}>
          NodeJs
        </div>
      </div>
      {/* ----------------------------- */}
      <div className="projest-list">
        {/* show all  */}
        <div className="project-listAll">
          {all
            ? all.map((project) => {
                return (
                  <div className="x">
                    <div className="h2H3">
                      <h2>{project.name}</h2>
                      <a href="https://pixabay.com/images/search/books/?manual_search=1">
                        <h3>Read More</h3>
                      </a>
                    </div>
                    <div className="imgDiv">
                      <img src={project.img} alt="" />
                    </div>
                  </div>
                );
              })
            : ""}

          {/* -----------react-------- */}
          {react
            ? react.map((project) => {
                return (
                  <div className="react-container">
                    <div className="reactText">
                      {" "}
                      <h3>{project.name}</h3>
                      <a href="https://pixabay.com/images/search/books/?manual_search=1">
                        <h3>Read More</h3>
                      </a>
                    </div>
                    <div className="reactImg">
                      <img src={project.img} alt="" />
                    </div>
                  </div>
                );
              })
            : ""}
          {/* js------------------------------------------- */}
          {js
            ? js.map((project) => {
                return (
                  <div className="js-container">
                    <div className="jsText">
                      <a href="https://pixabay.com/images/search/books/?manual_search=1">
                        <h2>Read More</h2>
                      </a>
                      <h3>{project.name}</h3>
                    </div>
                    <div className="jsImg">
                      <img src={project.img} alt="" />
                    </div>
                  </div>
                );
              })
            : ""}
          {/* node-js------------------ */}
          {nodejs
            ? nodejs.map((project) => {
                return (
                  <div className="nodeJs-container">
                    <div className="nodeJsImg">
                      <img src={project.img} alt="" />
                    </div>
                    <div className="nodeJsText">
                      <h3>{project.name}</h3>
                      <a href="https://pixabay.com/images/search/books/?manual_search=1">
                        <h2>Read More</h2>
                      </a>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
}
