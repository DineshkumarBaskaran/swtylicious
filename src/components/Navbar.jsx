import React, { useState, useEffect } from 'react';
import { Navbar as BootstrapNavbar, Container, Nav } from 'react-bootstrap';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <BootstrapNavbar 
      expand="lg" 
      fixed="top" 
      className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <BootstrapNavbar.Brand href="#home" onClick={() => scrollToSection('home')}>
          Swtylicious
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => scrollToSection('home')}>Home</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('about')}>About</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('services')}>Services</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('testimonials')}>Testimonials</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('contact')}>Contact</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar; 