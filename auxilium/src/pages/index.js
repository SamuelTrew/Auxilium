import React from "react";
// import { Link } from "gatsby";
import Layout from "../components/layout";
import Dyslexia from "./dyslexia";
// import Footer from '../components/navigation/Footer';
import Slider from "../components/Slider"
import TestImage from "../images/test.png"

const IndexPage = () => (
  <>
  <Layout>
    <h1>hello</h1>
    <Slider img_src={TestImage} />
  </Layout>
  </>
);

function initComparisons() {
  let overlay = document.getElementsByClassName("overlay");
  for (let i = 0; i < overlay.length; i++) {
    compareImages(overlay[i]);
  }
  function compareImages(img) {
    let clicked = 0;
    let width = img.offsetWidth;
    let slider = img.previousElementSibling;
    img.style.width = width / 2 + "px";
    slider.addEventListener("mousedown", slideReady);
    window.addEventListener("mouseup", slideFinish);
    slider.addEventListener("touchstart", slideReady);
    window.addEventListener("touchstop", slideFinish);
    function slideReady(event) {
      event.preventDefault();
      clicked = 1;
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }
    function slideFinish() {
      clicked = 0;
    }
    function slideMove(event) {
      let pos;
      if (clicked === 0) return false;
      pos = getCursorPos(event)
      if (pos < 0) pos = 0;
      if (pos > width) pos = width;
      slide(pos);
    }
    function getCursorPos(event) {
      let rect, x = 0;
      event = event || window.event;
      rect = img.getBoundingClientRect();
      x = event.pageX - rect.left;
      x = x - window.pageXOffset;
      return x;
    }
    function slide(x) {
      img.style.width = x + "px";
      slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
    }
  }
}
initComparisons()

export default IndexPage;
