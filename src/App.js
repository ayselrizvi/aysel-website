import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <h1 className="navbar-title">Aysel Rizvi</h1>
        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </nav>

      {/* Header Section */}
      <header className="header-section full-screen">
        <h2 className="header-title">Hi, I'm Aysel Rizvi</h2>
        <p className="header-subtitle">Computer Science Student</p>
        <div className="social-icons larger-icons">
          <a href="https://www.linkedin.com/in/aysel-r-a363b1220/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin social-icon"></i>
          </a>
          <a href="mailto:ayselrizvi@gmail.com">
            <i className="fas fa-envelope social-icon"></i>
          </a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="about-section full-screen">
        <div className="about-text">
          <h3 className="section-title">About Me</h3>
          <p className="section-content">
            Hi! I'm Aysel Rizvi, a Computer Science student at the University of Houston with a minor in Business Administration & Math.
          </p>
        </div>
      </section>

    {/* Experience Section */}
<section id="experience" className="experience-section full-screen">
  <h3 className="section-title">Experience</h3>
  <div className="experience-grid">
    <div className="experience-card">
      <h4 className="card-title">Software Engineering Intern</h4>
      <p className="card-subtitle">Intelligent Wellhead Systems · June 2024 - August 2024</p>
      <p className="card-description">Improved ticket categorization and analyzed 6,000+ tickets using PowerBI and Excel.</p>
    </div>
    <div className="experience-card">
      <h4 className="card-title">Lead Instructor</h4>
      <p className="card-subtitle">Kumon · May 2023 - August 2023</p>
      <p className="card-description">Managed 30 students and provided one-on-one feedback to ensure subject mastery.</p>
    </div>
    <div className="experience-card">
      <h4 className="card-title">Academic Tutor</h4>
      <p className="card-subtitle">ADY Tutoring · August 2021 - August 2023</p>
      <p className="card-description">Tutored AP subjects and executed SAT programs.</p>
    </div>
  </div>
</section>



      {/* Contact Section */}
      <section id="contact" className="contact-section full-screen">
        <h3 className="contact-title">Contact</h3>
        <p className="contact-subtitle">Feel free to reach out to me!</p>
        <div className="contact-icons">
          <a href="mailto:ayselrizvi@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope contact-icon"></i>
          </a>
          <a href="https://www.linkedin.com/in/aysel-r-a363b1220/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin contact-icon"></i>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <p className="footer-text">&copy; 2025 Aysel Rizvi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
