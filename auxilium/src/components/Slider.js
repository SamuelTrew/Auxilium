import React from 'react';
import './Slider.scss';

const Slider = ({ img_src }) => {
  return (
    <div className="container">
      <div className="image">
        <img className="filter-pro" src={ img_src } />
      </div>
      <div className="slider">
        <div className="circle" />
      </div>
      <div className="image overlay">
        <img className="normal" src={ img_src } />
      </div>
    </div>
  );
}

export default Slider;