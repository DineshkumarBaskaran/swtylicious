import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={4} className="mb-4 mb-lg-0">
            <h3 className="footer-title">Swtylicious</h3>
            <p className="footer-description">
              Bringing joy through delightful sweets and beverages. Experience the perfect blend of
              tradition and innovation at Swtylicious.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </Col>
          <Col lg={4} className="mb-4 mb-lg-0">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#home" onClick={() => scrollToSection('home')}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => scrollToSection('about')}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => scrollToSection('services')}>
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" onClick={() => scrollToSection('testimonials')}>
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => scrollToSection('contact')}>
                  Contact
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={4}>
            <h4 className="footer-heading">Newsletter</h4>
            <p className="footer-description">
              Subscribe to our newsletter for updates and special offers.
            </p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="text-center">
            <div className="footer-bottom">
              <p className="copyright">
                © {new Date().getFullYear()} Swtylicious. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; 