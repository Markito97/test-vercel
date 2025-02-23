'use client'; // Добавьте эту директиву, так как это клиентский компонент

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const UserMonitorSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Включаем боковые стрелки
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Slider {...settings}>
        <div>
          <img src="/all.png" alt="Slide 1" style={{ width: '100%' }} />
        </div>
        <div>
          <img src="/energetic.png" alt="Slide 2" style={{ width: '100%' }} />
        </div>
        <div>
          <img src="/director.png" alt="Slide 3" style={{ width: '100%' }} />
        </div>
        <div>
          <img src="/economist.png" alt="Slide 3" style={{ width: '100%' }} />
        </div>
      </Slider>
    </div>
  );
};
