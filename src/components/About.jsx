import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h2 className="section-title">About Swtylicious</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Welcome to Swtylicious, where tradition meets innovation in the world of sweets and beverages.
              We take pride in crafting delightful experiences through our unique blend of traditional recipes
              and modern flavors.
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={4}>
            <div className="feature-box">
              <i className="fas fa-heart"></i>
              <h3>Our Passion</h3>
              <p>
                We are passionate about creating the perfect balance of taste and quality in every product
                we serve.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="feature-box">
              <i className="fas fa-award"></i>
              <h3>Quality First</h3>
              <p>
                Using only the finest ingredients, we ensure that every bite and sip brings joy to our
                customers.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="feature-box">
              <i className="fas fa-users"></i>
              <h3>Customer Focus</h3>
              <p>
                Your satisfaction is our priority. We constantly innovate to bring you new and exciting
                flavors.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About; 