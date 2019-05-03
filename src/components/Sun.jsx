import React from "react";
import sunSketch from "../sketches/sunSketch.js";
import P5Wrapper from "./P5Wrapper.jsx";
import eclipseSketch from "../sketches/eclipseSketch.js";

class Sun extends React.Component {
  constructor(props) {
    super(props);

    this.getData = this.getData.bind(this);
    this.getCurrentYear = this.getCurrentYear.bind(this);
    this.getNextEclipse = this.getNextEclipse.bind(this);

    this.state = {
      error: null,
      daysUntilEclipse: null,
      isLoading: false,
      debug: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.getData();
    setInterval(this.getData, 600 * 1000);
  }

  componentWillMount() {
    clearInterval(this.getData);
  }

  getData() {
    const currentYear = this.getCurrentYear();
    fetch(`http://api.usno.navy.mil/eclipses/solar?year=${currentYear}`)
      .then(res => res.json())
      .then(
        result => {
          this.getNextEclipse(result.eclipses_in_year);
          this.setState({ isLoading: false, daysUntilEclipse: Math.random(0,10)*10 });
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
        <P5Wrapper sketch={sunSketch} debug={this.state.debug} />;
        <P5Wrapper sketch={eclipseSketch} debug={this.state.debug} />;
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
