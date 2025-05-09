import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import './Testimonials.css';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Regular Customer',
      image: '/images/avatar-3.png',
      text: 'The milkshakes at Swtylicious are absolutely divine! The perfect blend of creaminess and flavor. Their carrot halwa is also a must-try!',
      rating: 5,
    },
    {
      name: 'Rahul Patel',
      role: 'Food Blogger',
      image: '/images/avatar-2.png',
      text: 'As someone who reviews sweets professionally, I can say that Swtylicious sets a new standard. Their milk peda is authentic and delicious!',
      rating: 5,
    },
    {
      name: 'Ananya Gupta',
      role: 'Local Resident',
      image: '/images/avatar-4.png',
      text: 'The gift boxes are beautifully packaged and make perfect presents. The quality of sweets is consistently excellent!',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h2 className="section-title">Customer Reviews</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Don't just take our word for it. Here's what our valued customers have to say about their
              experience at Swtylicious.
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-slide">
                  <div className="testimonial-card">
                    <div className="testimonial-image">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className="testimonial-content">
                      <div className="rating">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <i key={i} className="fas fa-star"></i>
                        ))}
                      </div>
                      <p className="testimonial-text">{testimonial.text}</p>
                      <h4 className="testimonial-name">{testimonial.name}</h4>
                      <p className="testimonial-role">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials; 