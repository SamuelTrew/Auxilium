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
          <div class="container comparisons-container">
            <div class="container__row container-comparisons-row">
              <div class="container__col-sm-3">
                <h3>Select simulation</h3>
                <div className="form-check">
                  <label>
                    <input
                      type="radio"
                      name="simulation"
                      value="protanopia"
                      checked={this.state.filter_type === "protanopia"}
                      onChange={this.handleOptionChange}
                      className={"form-check-input" + (this.state.filter_type === "protanopia" ? " checked" : "")}
                    />
                    Protanopia
                  </label>
                </div>

                <div className="form-check">
                  <label>
                    <input
                      type="radio"
                      name="simulation"
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
                      name="simulation"
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
                      name="simulation"
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
                      name="simulation"
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
                      name="simulation"
                      value="tritanomaly"
                      checked={this.state.filter_type === "tritanomaly"}
                      onChange={this.handleOptionChange}
                      className="form-check-input"
                    />
                    Tritanomaly
                  </label>
                </div>

                <div className="form-check">
                  <label>
                    <input
                      type="radio"
                      name="simulation"
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
                      name="simulation"
                      value="achromatomaly"
                      checked={this.state.filter_type === "achromatomaly"}
                      onChange={this.handleOptionChange}
                      className="form-check-input"
                    />
                    Achromatomaly
                  </label>
                </div>
              </div>

              <div class="container__col-sm-2"></div>

              <div class="container__col-sm-7 container-comparisons-images">
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
              </div>
            </div>
          </div>
        </Layout>
      </>
    );
  }
}

export default ComparisonPage;
