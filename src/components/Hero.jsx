import React from "react";
import {ReactTyped} from "react-typed";
import banner from "../assets/sky.jpg";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <img
            className="hero-img"
            src={banner} 
            alt="Sky banner"
            loading="eager"
        />
      </div>

      <div className="hero-text">
        <h1>
            Hi, I'm <span className="highlight">Jed Renzo</span>
        </h1>
        <h2>
            I am a {""}
        <ReactTyped
            strings={[" Computer Engineer", " Programmer", " Experienced QA Tester", " Developer"]}
            typeSpeed={100}
            backSpeed={60}
            backDelay={900}
            smartBackspace
            loop
          />

        </h2>
        <p>Computer Engineering student and aspiring software developer.</p>
        <list>
            <li>Python</li>
            <li>JavaScript</li>
            <li>C/C++</li>
            <li>HTML/CSS</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Git</li>
        </list>
        <a href="#projects">See my work</a>
      </div>
    </section>
  );
}
