import React from 'react';
import './Marquee.css';

const Marquee = () => {
  const offers = [
    "🎉 Special Offer: Buy 2 Get 1 Free on Milkshakes!",
    "🍰 Fresh Carrot Halwa Available Daily",
    "🥛 Traditional Milk Peda - Made with Pure Milk",
    "🎁 Custom Gift Boxes Available",
    "🌟 Free Delivery on Orders Above ₹500",
  ];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {offers.map((offer, index) => (
          <span key={index} className="marquee-item">
            {offer}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee; 