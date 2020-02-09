import React from 'react';
import './Slider.scss';

const Slider = ({ img_src, filter_type }) => {
  return (
    <div className="container">
      <div className="image">
        <img className={"filter-" + filter_type} src={ img_src } />
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