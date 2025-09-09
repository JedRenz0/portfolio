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
            Hi, I'm Jed and I like{" "}
          <ReactTyped
            strings={[" Programming", " Computing", " Electronics", " Music"]}
            typeSpeed={100}
            backSpeed={60}
            backDelay={900}
            smartBackspace
            loop
          />
        </h1>
        <p>Computer Engineering student and aspiring software developer.</p>
        <a href="#projects">See my work</a>
      </div>
    </section>
  );
}
