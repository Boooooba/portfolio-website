import React from "react";
import { useRef, useState, useEffect } from "react";
import useElementOnScreen from "./useElementOnScreen";

const Projects = ({ code, img, link, text }) => {
  const mystyle = {
    height: "260px",
  };

  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  });

  return (
    <div ref={containerRef} className='projects-intro'>
      <div className={`projects-browser ${isVisible? 'show' : 'hidden'}`}>
        <div className={`projects-circle ${isVisible? 'show' : 'hidden'}`}></div>
        <div className={`projects-circle ${isVisible? 'show' : 'hidden'}`}></div>
        <div className={`projects-circle ${isVisible? 'show' : 'hidden'}`}></div>
      </div>
      <div className={`img-a-wrapper ${isVisible? 'show' : 'hidden'}`}>
        <a href={link} className={`img-a ${isVisible? 'show' : 'hidden'}`} target="_blank">
          <img
            style={mystyle}
            src={img}
            alt="project"
            className={`projects-image ${isVisible? 'show' : 'hidden'}`}
          />
        </a>
      </div>
      <p className={`project-text ${isVisible? 'show' : 'hidden'}`}>{text}</p>
      <div className={`project-src-code ${isVisible? 'show' : 'hidden'}`}>
        <a href={code} target="_blank" className={`src ${isVisible? 'show' : 'hidden'}`}>
          Source Code
        </a>
      </div>
    </div>
  );
};

export default Projects;
