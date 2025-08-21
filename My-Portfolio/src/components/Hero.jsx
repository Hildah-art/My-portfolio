import React from "react";

function Hero() {
  return (
    <section id="home" className="hero reveal reveal-top">
      <h2>Hi, I'm <span>Hildah 👋</span></h2>
      <p>
        Passionate about <span>backend development</span>, frontend integration, 
        and building <span>secure web apps</span>.
      </p>
      <div className="btn-container">
        <a href="#projects" className="btn btn-primary">View My Work</a>
        <a href="#contact" className="btn btn-outline">Hire Me</a>
      </div>
    </section>
  );
}

export default Hero;