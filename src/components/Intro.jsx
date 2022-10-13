import React from "react";
import { useState } from "react";
import { Link } from 'react-scroll'
import {
  faGithub,
  faLinkedin,
  faReact,
  faHtml5,
  faCss3,
  faGitAlt,
  faJs,
  faVuejs,
  faJsSquare,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Intro() {

  return (
    <div className="container">
      <div className="intro">
        <div className="intro-left">
          <div className="social-media-icons">
            <a href="https://github.com/Boooooba" className="github">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/buba-rekhviashvili-748b6918b/"
              className="linkedin"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <div className="intro-left-wrapper">
            <h2 className="intro-line">Hello, my name is</h2>
            <h1 className="intro-name">Buba</h1>
            <div className="intro-title">
              <div className="intro-title-wrapper">
                <div className="intro-title-item">Front-end Developer</div>
                <div className="intro-title-item">Front-end Developer</div>
                <div className="intro-title-item">Front-end Developer</div>
                <div className="intro-title-item">Front-end Developer</div>
                <div className="intro-title-item">Front-end Developer</div>
              </div>
            </div>
            <p className="intro-desc">
              I love exploring and creating, I am a lifelong learner and I might
              have a thing for skiing and a traditional Neapolitan Pizza.
            </p>
          </div>
        </div>
        <div className="intro-right">
          <div className="intro-right-bg"></div>
          <div className="intro-bottom-bg"></div>
          <React.Fragment>
            <ul className="nav-list">
              <li className="nav-list-item">
                <a href="#" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-list-item" >
                <Link to='projects' spy={true} smooth={true} offset={0} duration={500} className="nav-link">
                  Projects
                </Link>
              </li>
              <li className="nav-list-item" >
                <Link to="contact" spy={true} smooth={true} offset={0} duration={500} className="nav-link">
                  Contact me
                </Link>
              </li>
            </ul>
          </React.Fragment>
          <div className="intro-img-cont">
            <img
              src="assets/photos/dev.png"
              alt="cartoon dev"
              className="intro-img"
            />
          </div>
          <div className="tech">
            <div className="tech-text-wrapper">
              <span className="name-wrapper">
                <a href="https://reactjs.org" target="_blank" className='icon-a'>
                  <FontAwesomeIcon icon={faReact} className="stack" />
                  <span className="name-react">React</span>
                </a>
              </span>
              <span className="name-wrapper">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                  target="_blank" className='icon-a'
                >
                  <FontAwesomeIcon icon={faHtml5} className="stack" />
                  <span className="name-react">HTML5</span>
                </a>
              </span>
              <span className="name-wrapper">
                {" "}
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                  target="_blank" className='icon-a'
                >
                  <FontAwesomeIcon icon={faCss3} className="stack" />
                  <span className="name-react">CSS3</span>
                </a>
              </span>
              <span className="name-wrapper">
                {" "}
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank" className='icon-a'
                >
                  <FontAwesomeIcon icon={faJs} className="stack" />
                  <span className="name-react">JavaScript</span>
                </a>
              </span>
              <span className="name-wrapper">
                {" "}
                <a
                  href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub"
                  target="_blank" className='icon-a'
                >
                  <FontAwesomeIcon icon={faGitAlt} className="stack" />
                  <span className="name-react">Git</span>
                </a>
              </span>
              <span className="name-wrapper">
                {" "}
                <a href="https://github.com" target="_blank" className='icon-a'>
                  <FontAwesomeIcon icon={faGithub} className="stack" />
                  <span className="name-react">GitHub</span>
                </a>
              </span>
            </div>
          </div>
          <a target='_blank' href="https://drive.google.com/file/d/1YX2tlTp3MOA7KNOTVYBXZ2IZADFpEnlp/view?usp=sharing" className="cv-link">See my Resume!</a>
        </div>
      </div>
    </div>
  );
}
