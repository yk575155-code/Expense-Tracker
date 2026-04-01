import React from "react";
import "./About.css";
import logo from "../assets/new.png";
import yusufImage from "../assets/img_2.jpg";
import CV from "../assets/yusuf-RESUME.pdf";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <header>
        <nav>
          <Link to="/">←</Link>

          <div className="logo">
            <img src={logo} alt="logo" />
            <h1>Bakery Daily Expense</h1>
          </div>

          <Link to="/">Home</Link>
          <Link to="/expenses">Show List</Link>
        </nav>
      </header>

      <main>
        {/* ===== ABOUT SECTION ===== */}
        <div className="background1">
          <div className="left">
            <h1>Hello, It’s Me</h1>
            <h1>Khan Mohd. Yusuf Yakub</h1>

            <h3>
              I'm a{" "}
              <span style={{ color: "#ffde59" }}>Full Stack Web Developer</span>
            </h3>

            <p>
              I build modern, responsive, and user-friendly web applications
              that solve real-world problems. I enjoy turning ideas into reality
              through clean code and efficient design.
              <br />
              <br />
              My tech stack includes HTML, CSS, JavaScript, and React.js for
              frontend development, along with Node.js and Python for backend
              development.
              <br />
              <br />I am currently focused on improving my skills, building
              real-world projects, and seeking opportunities to grow as a
              developer.
            </p>

            {/* SOCIAL ICONS */}
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>

            <a className="btn" href={CV} download>
              Download CV
            </a>
          </div>

          <div className="right">
            <img src={yusufImage} alt="Yusuf" />
          </div>
        </div>

        {/* ===== SKILLS ===== */}
        <div className="background2">
          <div className="about-container">
            <h2>My Skills</h2>

            <div className="skills-grid">
              <div className="skills-card">
                <i className="bi bi-code-slash"></i>
                <h3>Frontend</h3>
                <div className="skills-list">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>React</span>
                </div>
              </div>

              <div className="skills-card">
                <i className="bi bi-server"></i>
                <h3>Backend</h3>
                <div className="skills-list">
                  <span>Node.js</span>
                  <span>Python</span>
                  <span>SQL</span>
                </div>
              </div>

              <div className="skills-card">
                <i className="bi bi-brush"></i>
                <h3>Tools</h3>
                <div className="skills-list">
                  <span>Canva</span>
                  <span>Photoshop</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== EDUCATION ===== */}
        <div className="background3">
          <div className="about-container">
            <h2>My Education</h2>

            <div className="education-grid">
              <div className="education-card">
                <h3>School</h3>
                <div className="education-list">
                  <span>10th - Tungareshwar Academy</span>
                  <span>Year: 2024</span>
                  <span>70%</span>
                </div>
              </div>

              <div className="education-card">
                <h3>College</h3>
                <div className="education-list">
                  <span>12th Running</span>
                  <span>Year: 2026</span>
                  <span>75%</span>
                </div>
              </div>

              <div className="education-card">
                <h3>Courses</h3>
                <div className="education-list">
                  <span>Itech Computer Institute</span>
                  <span>HTML, CSS, JS, React, Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* project section */}
        <div className="background4">
  <div className="about-container">
    <h2>My Projects</h2>

    <div className="projects-grid">

      {/* Project 1 */}
      <div className="project-card">
        <h3>Expense Tracker</h3>

        <p>
          Built a responsive expense tracking app using React and LocalStorage,
          allowing users to manage daily transactions efficiently.
        </p>

        {/* Tech Stack */}
        <div className="project-list">
          <span>React</span>
          <span>CSS</span>
          <span>LocalStorage</span>
        </div>

        {/* Buttons */}
        <div className="project-links">
          <a href="https://expense-tracker-9wni.onrender.com/#/" target="_blank" rel="noreferrer">
            Live
          </a>
        </div>
      </div>

      {/* Project 2 */}
      <div className="project-card">
        <h3>Portfolio Website</h3>

        <p>
          Designed and developed a personal portfolio website to showcase
          projects, skills, and experience with a clean UI.
        </p>

        <div className="project-list">
          <span>React</span>
          <span>CSS</span>
          <span>Responsive</span>
        </div>

        <div className="project-links">
          <a href="about" target="_blank" rel="noreferrer">
            Live
          </a>
        </div>
      </div>

      {/* Project 3 */}
      <div className="project-card">
        <h3>E-commerce Platform</h3>

        <p>
          A simple and user-friendly e-commerce platform where users can browse,
          search, and purchase products.
        </p>

        <div className="project-list">
          <span>React</span>
          <span>CSS</span>
          <span>PHP</span>
        </div>

        <div className="project-links">
          <a href="https://yusuf-project-01.vercel.app/" target="_blank" rel="noreferrer">
            Live
          </a>
        </div>
      </div>

    </div>
  </div>
</div>


      </main>
    </>
  );
}

export default About;
