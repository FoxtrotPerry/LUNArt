import React from "react";
import sunSketch from "../sketches/sunSketch.js";
import P5Wrapper from "./P5Wrapper.jsx";
import eclipseSketch from "../sketches/eclipseSketch.js";
import { timingSafeEqual } from "crypto";

class Sun extends React.Component {
  constructor(props) {
    super(props);

    this.getData = this.getData.bind(this);
    this.getCurrentYear = this.getCurrentYear.bind(this);
    this.getNextEclipse = this.getNextEclipse.bind(this);

    this.state = {
      step: null,
      error: null,
      daysUntilEclipse: null,
      isLoading: false,
      debug: true
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.keyboardInput);
    this.setState({ isLoading: true, step: 0.01 });
    this.getData();
    if (this.state.debug) {
      setInterval(() => {
        this.setState({ daysUntilEclipse: this.state.daysUntilEclipse - this.state.step})
      }, 5)
    } else {
      setInterval(this.getData, 600 * 1000);
    }
  }

  componentWillMount() {
    clearInterval(this.getData);
  }

  keyboardInput = (e) => {
    const {keyCode: code} = e;
    switch(code) {
      case 13: this.setState({ daysUntilEclipse: 30, step: 0.01 });
      break;
      case 79: this.setState({ step: 0.0001, daysUntilEclipse: 0});
      break;
      case 80: this.setState({ step: 0.1 });
      break;
      case 73: this.setState({ step: 0.01 });
      break;
      case 85: this.setState({ daysUntilEclipse: 100, step: 0 });
      break;
    }
  }

  getData() {
    const currentYear = this.getCurrentYear();
    fetch(`http://api.usno.navy.mil/eclipses/solar?year=${currentYear}`)
      .then(res => res.json())
      .then(
        result => {
          this.getNextEclipse(result.eclipses_in_year);
          this.setState({ isLoading: false, daysUntilEclipse: 100, step: 0 });
        },
        error => this.setState({ error, isloading: false })
      );
  }

  getCurrentYear() {
    return new Date().getFullYear();
  }

  getNextEclipse(eclipses) {

  }

  render() {
    if (this.state.error) {
      return <div>ERROR: {this.state.error}</div>;
    } else if (this.state.isLoading) {
      return <div>Loading...</div>;
    } else if (this.state.debug) {
      return (
      <div>
        <P5Wrapper sketch={sunSketch} daysUntilEclipse={this.state.daysUntilEclipse} debug={this.state.debug} />;
        <P5Wrapper sketch={eclipseSketch} daysUntilEclipse={this.state.daysUntilEclipse} debug={this.state.debug} />;
      </div>
      );
    } else {
      return (
        <div>
      <P5Wrapper sketch={sunSketch} daysUntilEclipse={this.state.daysUntilEclipse} />
      <P5Wrapper sketch={eclipseSketch} daysUntilEclipse={this.state.daysUntilEclipse} />;
      </div>
      );
    }
  }
}

export default Sun;
