import React from "react";
import Layout from "../components/layout";
import Slider from "../components/Slider"
import CiscoImage from "../images/cisco.jpg"
import NextJumpImage from "../images/nextjump.jpg"
import ThoughtMachineImage from "../images/thoughtmachine.jpg"
import AmexImage from "../images/amex.jpg"
import ImprobableImage from "../images/improbable.jpg"
import EFImage from "../images/ef.png"

class ComparisonPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {filter_type: 'protanopia'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleOptionChange = changeEvent => {
    this.setState({
      filter_type: changeEvent.target.value
    });
  }

  componentDidMount() {
    function initComparisons() {
      console.log("TEST")
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
  }

  render() {
    return (
      <>
        <Layout>
          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="protanopia"
                checked={this.state.filter_type === "protanopia"}
                onChange={this.handleOptionChange}
                className="form-check-input"
              />
              Protanopia
            </label>
          </div>

          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="protanomaly"
                checked={this.state.filter_type === "protanomaly"}
                onChange={this.handleOptionChange}
                className="form-check-input"
              />
              Protanomaly
            </label>
          </div>

          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="deuteranopia"
                checked={this.state.filter_type === "deuteranopia"}
                onChange={this.handleOptionChange}
                className="form-check-input"
              />
              Deuteranopia
            </label>
          </div>

          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="deuteranomaly"
                checked={this.state.filter_type === "deuteranomaly"}
                onChange={this.handleOptionChange}
                className="form-check-input"
              />
              Deuteranomaly
            </label>
          </div>

          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="tritanopia"
                checked={this.state.filter_type === "tritanopia"}
                onChange={this.handleOptionChange}
                className="form-check-input"
              />
              Tritanopia
            </label>
          </div>

          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="tritanomaly"
                checked={this.state.filter_type === "tritanomaly"}
                onChange={this.handleOptionChange}
                className="form-check-input"
              />
              tritanomaly
            </label>
          </div>

          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="achromatopsia"
                checked={this.state.filter_type === "achromatopsia"}
                onChange={this.handleOptionChange}
                className="form-check-input"
              />
              Achromatopsia
            </label>
          </div>

          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="achromatomaly"
                checked={this.state.filter_type === "achromatomaly"}
                onChange={this.handleOptionChange}
                className="form-check-input"
              />
              Achromatomaly
            </label>
          </div>

          <h1>hello</h1>
          <Slider img_src={CiscoImage} filter_type={this.state.filter_type} />
          <br />
          <Slider img_src={NextJumpImage} filter_type={this.state.filter_type} />
          <br />
          <Slider img_src={ThoughtMachineImage} filter_type={this.state.filter_type} />
          <br />
          <Slider img_src={AmexImage} filter_type={this.state.filter_type} />
          <br />
          <Slider img_src={ImprobableImage} filter_type={this.state.filter_type} />
          <br />
          <Slider img_src={EFImage} filter_type={this.state.filter_type} />
          <br />
        </Layout>
      </>
    );
  }
}

export default ComparisonPage;
