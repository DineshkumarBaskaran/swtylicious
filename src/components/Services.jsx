import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-glass-cheers',
      title: 'Signature Milkshakes',
      description: 'Experience our rich and creamy milkshakes made with premium ingredients and unique flavors.',
      image: '/images/milk.jpg',
    },
    {
      icon: 'fas fa-cookie',
      title: 'Traditional Milk Peda',
      description: 'Authentic milk peda prepared using traditional methods and pure milk for that perfect taste.',
      image: '/images/milkpe.jpg',
    },
    {
      icon: 'fas fa-carrot',
      title: 'Carrot Specialties',
      description: 'Delight in our range of carrot-based sweets, from classic halwa to innovative creations.',
      image: '/images/carrot.jpg',
    },
    {
      icon: 'fas fa-gift',
      title: 'Custom Gift Boxes',
      description: 'Create your perfect gift box with a selection of our finest sweets and treats.',
      image: '/images/gift.jpg',
    },
  ];

  return (
    <section id="services" className="services-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h2 className="section-title">Our Services</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Discover our range of delightful offerings, crafted with love and the finest ingredients
              to satisfy your sweet cravings.
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          {services.map((service, index) => (
            <Col key={index} md={6} lg={3} className="mb-4">
              <Card className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <Card.Body>
                  <i className={`${service.icon} service-icon`}></i>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services; 