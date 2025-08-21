import React from "react";
import "../styles/index.css";

export default function Projects() {
  return (
    <section id="projects" className="projects reveal">
      <h2>Projects</h2>

      <div className="project-grid">
        {/* Project 1 */}
        <div className="project-card">
          <img src="https://via.placeholder.com/400x200" alt="Project 1" />
          <div className="project-card-content">
            <h3>TermoCast Weather App 🌦</h3>
            <p>A CLI weather tracking app built with Python & SQLAlchemy. Fetches and stores real-time weather data.</p>
            <div className="project-links">
              <a href="https://demo-link.com" target="_blank" rel="noreferrer" className="btn-demo">Live Demo</a>
              <a href="https://github.com/hildahnjaga/termocast" target="_blank" rel="noreferrer" className="btn-code">Code</a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <img src="https://via.placeholder.com/400x200" alt="Project 2" />
          <div className="project-card-content">
            <h3>Twyne Dating App ❤</h3>
            <p>A React + Vite dating app with profile discovery, matching, and chat features. Styled with custom CSS.</p>
            <div className="project-links">
              <a href="https://demo-link.com" target="_blank" rel="noreferrer" className="btn-demo">Live Demo</a>
              <a href="https://github.com/hildahnjaga/twyne" target="_blank" rel="noreferrer" className="btn-code">Code</a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <img src="https://via.placeholder.com/400x200" alt="Project 3" />
          <div className="project-card-content">
            <h3>Lost & Found 👜</h3>
            <p>A Flask-based backend system for reporting, claiming, and rewarding lost & found items at Moringa School.</p>
            <div className="project-links">
              <a href="https://demo-link.com" target="_blank" rel="noreferrer" className="btn-demo">Live Demo</a>
              <a href="https://github.com/hildahnjaga/lost-and-found" target="_blank" rel="noreferrer" className="btn-code">Code</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}