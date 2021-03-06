import React, { Component } from 'react';
import Swiper, { EffectFade, Autoplay } from 'react-id-swiper';
import Link from 'next/link';

const params = {
  modules: [EffectFade, Autoplay],
  slidesPerView: 1,
  watchOverflow: false,
  autoplay: {
    delay: 5000
  },
  loop: true,
  allowTouchMove: false,
  speed: 1000,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  }
};
const images = [
  '/images/collection/metals.jpg',
  '/images/collection/uspt.jpg',
];

export default class HeroSection extends Component {
  render() {
    return (
      <div className="hero-section position-relative">
        <Swiper {...params}>
          {images.map((image, index) => (
            <div key={image}>
              <div
                className="hero-slide d-flex align-items-center justify-content-center flex-column font-color-white py-5"
                style={{
                  backgroundImage: `url("${image}")`
                }}
              > 
              </div>
            </div>
          ))}
        </Swiper>
      </div>
    );
  }
}
