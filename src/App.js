import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 40,
    });
  }, []);

  return (
    <div className="app-container">
      <nav className="navbar">
        <a href="/" className="navbar-title">Aysel Rizvi</a>
        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </nav>

      <header className="hero full-screen">
        <p className="hero-label" data-aos="fade-up">Technology Consultant</p>
        <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100">
          Hi, I'm <span className="hero-name">Aysel Rizvi</span>
        </h1>
        <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
          I help organizations solve complex problems with technology at <span className="hero-company">Credera</span> — and I love turning ideas into solutions that matter.
        </p>
        <div className="hero-actions" data-aos="fade-up" data-aos-delay="300">
          <a href="#contact" className="btn btn-primary">Get in touch</a>
          <a href="https://www.linkedin.com/in/aysel-r-a363b1220/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" aria-label="LinkedIn">
            <i className="fab fa-linkedin" />
          </a>
          <a href="mailto:ayselrizvi@gmail.com" className="btn btn-ghost" aria-label="Email">
            <i className="fas fa-envelope" />
          </a>
        </div>
      </header>

      <section id="about" className="about-section full-screen">
        <div className="about-container">
          <div className="about-image-wrap" data-aos="fade-right">
            <img src="/profile.jpeg" alt="Aysel Rizvi" className="about-image" />
          </div>
          <div className="about-content" data-aos="fade-left">
            <h2 className="section-title">About me</h2>
            <p className="about-body">
              I studied Computer Science at the University of Houston, with minors in Business Administration and Math — a mix that taught me how to think technically and communicate clearly. Currently I'm working at Credera as a Technology Consultant, where I collaborate closely with clients to understand their needs, translate business problems into technical solutions, and support teams through delivery.
            </p>
            <p className="about-body">
              When I'm not at my desk, I enjoy exploring new tech, discovering coffee spots around Houston, and spending time with friends. I'm always up for trying something new.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section">
        <h2 className="section-title section-title-centered" data-aos="fade-up">Experience</h2>
        <div className="experience-grid">
          <article className="experience-card" data-aos="fade-up" data-aos-delay="0">
            <div className="experience-card-header">
              <span className="experience-role">Technology Consultant</span>
              <span className="experience-company-name">Credera</span>
              <span className="experience-date">August 2025 – Present</span>
            </div>
            <p className="experience-description">
              Helping clients navigate digital transformation and build solutions that unlock growth. I work across the full lifecycle — from discovery and design through build and delivery — so technology aligns with business goals.
            </p>
          </article>

          <article className="experience-card" data-aos="fade-up" data-aos-delay="100">
            <div className="experience-card-header">
              <span className="experience-role">Software Engineering Intern</span>
              <span className="experience-date">Jun 2024 – Aug 2024</span>
            </div>
            <div className="experience-company-row">
              <img src="/IWSlogo.png" alt="" className="experience-company-logo" aria-hidden />
              <span className="experience-company-name">Intelligent Wellhead Systems</span>
            </div>
            <div className="experience-photo-wrap">
              <img src="/fieldpic.JPG" alt="Aysel at IWS" className="internship-photo" />
            </div>
          </article>
        </div>
      </section>

      <section id="contact" className="contact-section full-screen">
        <div className="contact-inner" data-aos="fade-up">
          <h2 className="section-title">Let's connect</h2>
          <p className="contact-subtitle">
            Whether it's a project, a conversation, or just saying hi — I'd love to hear from you.
          </p>
          <div className="contact-links">
            <a href="mailto:ayselrizvi@gmail.com" className="contact-link" aria-label="Email">
              <i className="fas fa-envelope" />
              <span>ayselrizvi@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/aysel-r-a363b1220/" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="LinkedIn">
              <i className="fab fa-linkedin" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p className="footer-text">&copy; {new Date().getFullYear()} Aysel Rizvi</p>
      </footer>
    </div>
  );
}

export default App;
