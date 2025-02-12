import React, { useEffect } from 'react';  // ✅ Import useEffect
import AOS from 'aos';  // ✅ Import AOS
import 'aos/dist/aos.css';  // ✅ Import AOS styles
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation happens only once
    });
  }, []);



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

      {/* About Section with AOS Animation */}
      <section id="about" className="about-section full-screen">
        <div className="about-container">
          <div className="about-text" data-aos="fade-right">
            <h3 className="section-title">About Me</h3>
            <p className="section-content">
              Hi! I'm Aysel Rizvi, a Computer Science student at the University of Houston with a minor in Business Administration & Math.
            </p>
          </div>
          <div className="about-image-container" data-aos="fade-left">
            <img src="/profile.jpeg" alt="Aysel Rizvi" className="about-image" />
          </div>
        </div>
      </section>


      <section id="experience" className="experience-section">
  <div className="experience-container">
    {/* Left Side - Images */}
    <div className="experience-images">
      <img src="/IWSlogo.png" alt="Intelligent Wellhead Systems Logo" className="company-logo" />
      <img src="/fieldpic.JPG" alt="Aysel Rizvi at Internship" className="internship-photo" />
    </div>

    {/* Right Side - Text */}
    <div className="experience-text">
      <h3 className="section-title">Software Engineering Intern</h3>
      <p className="company-name">Intelligent Wellhead Systems · June 2024 - August 2024</p>
      <p className="experience-description">
        During my internship, I worked on enhancing ticket categorization, support efficiency, and cross-functional collaboration.
      </p>
      <ul className="experience-list">
        <li>Improved ticket categorization, leading to quicker issue identification.</li>
        <li>Resolved support tickets, ensuring timely fixes in the Remote Operational Control Center.</li>
        <li>Analyzed 6,000+ tickets using Power BI & Excel for roadmap prioritization.</li>
        <li>Gained cross-functional experience in Sales, Product Marketing, Finance, and Workshop.</li>
      </ul>
      <p className="experience-tech"><strong>Technologies Used:</strong> Power Apps, Power BI, Dynamics 365, Excel, SQL</p>
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
