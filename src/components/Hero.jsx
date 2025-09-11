import React from "react";
import {ReactTyped} from "react-typed";
import banner from "../assets/sky.jpg";
import profile from "../assets/profile.png";

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
      <div className="hero-wrap">
        <div className="hero-text">

            <h1>
                Hi, I'm <span className="highlight">Jed Renzo</span>
            </h1>
            <h2>
                {""}
            <ReactTyped
                strings={[" An Computer Engineering Student", " A Programmer", " An Experienced QA Tester", "A Developer"]}
                typeSpeed={100}
                backSpeed={60}
                backDelay={900}
                smartBackspace
                loop
            />

            </h2>
            <p>I am a Aspiring software developer with a strong foundation in computer engineering and a drive to create impactful technology.</p>
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
        <div className="hero-photo">
            <img src={profile} alt="Jed Renzo portrait" className="profile-img"/>
        </div>
      </div>
    </section>
  );
}
