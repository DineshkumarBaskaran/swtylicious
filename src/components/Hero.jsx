import React from 'react';
import Slider from 'react-slick';
import { Container } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear', // optional: makes the slide smoother
    arrows: false,     // optional: hide arrows if not needed
  };

  const slides = [
    {
      image: 'images/milkshake.jpg',
      title: 'Delicious Milkshakes',
      description: 'Experience our signature creamy milkshakes',
    },
    {
      image: 'images/peeda.jpg',
      title: 'Traditional Milk Peda',
      description: 'Authentic taste of traditional sweets',
    },
    {
      image: 'images/carrots.jpeg',
      title: 'Carrot Delights',
      description: 'Unique carrot-based sweets for every occasion',
    },
  ];

  return (
    <section id="home" className="hero-section">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="hero-slide">
            <div
              className="hero-image"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-overlay">
                <Container>
                  <div className="hero-content">
                    <h1>{slide.title}</h1>
                    <p>{slide.description}</p>
                    <button className="btn btn-primary">Order Now</button>
                  </div>
                </Container>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
