var moment = require('moment');

export default function sketch(p) {
  let x = 0,
      y = 0,
      phaseMod = 0;

  var ratio = 0;
  var data;
  var debug;

  const getTimeProgress = () => 100 - (moment.duration(moment().endOf('day').diff(moment())).asHours() / 24 * 100);

  function calcRatio(currentDate, endDate, ratio) {
    if (debug == false) {
      let temp = currentDate.split(" ");
      currentDate = temp[2];
      temp = endDate.split(" ");
      endDate = temp[2];

      ratio = (((endDate - currentDate) + getTimeProgress()) / 7.5);
      return ratio;

    } else {
      return ratio + 500;
    }
  };

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.data) {
      data = props.data;
      debug = props.debug;
    }
  };

  p.draw = function () {
    if (data) {
      p.clear();
      const moonPhase = data[0].phase;
      const progress = getTimeProgress();
      p.noStroke();

      switch (moonPhase) {
        case "New Moon": (() => {
          p.fill(255, 245, 200);
          p.arc(p.windowWidth / 2, p.windowHeight / 2, 500, 500, -p.HALF_PI, p.HALF_PI);
          p.fill(40);
          ratio = calcRatio(data[0].date, data[1].date, ratio);
          p.arc(p.windowWidth / 2, p.windowHeight / 2, 500, 500, p.HALF_PI, p.HALF_PI + p.PI);
          p.arc(p.windowWidth / 2, p.windowHeight / 2, (500 - (ratio / 500)), 500, p.HALF_PI + p.PI, p.HALF_PI);
          if ((500 - (ratio / 500)) <= 0) {
            data[0].phase = "First Quarter";
            ratio = 0;
          }
        })();
          break;

        case "Full Moon": (() => {

          p.fill(40);
          p.ellipse(p.windowWidth / 2, p.windowHeight / 2, 500);
          p.fill(255, 245, 200);
          ratio = calcRatio(data[0].date, data[1].date, ratio);
          p.arc(p.windowWidth / 2, (p.windowHeight / 2), 500, 500, p.HALF_PI, p.HALF_PI + p.PI);
          p.arc(p.windowWidth / 2, p.windowHeight / 2, (500 - (ratio / 500)), 500, p.HALF_PI + p.PI, p.HALF_PI);
          if ((500 - (ratio / 500)) <= 0) {
            data[0].phase = "Last Quarter";
            ratio = 0;
          }
        })();
          break;

        case "First Quarter": (() => {
          p.fill(40);
          p.arc(p.windowWidth / 2, p.windowHeight / 2, 500, 500, p.HALF_PI, -p.HALF_PI);
          p.fill(255, 245, 200);
          ratio = calcRatio(data[0].date, data[1].date, ratio);
          p.arc(p.windowWidth / 2, p.windowHeight / 2, (0 + (ratio / 500)), 500, p.HALF_PI, p.HALF_PI + p.PI);
          p.fill(255, 245, 200);
          p.arc(p.windowWidth / 2, p.windowHeight / 2, 500, 500, p.HALF_PI + p.PI, p.HALF_PI);
          if ((500 - (ratio / 500)) <= 0) {
            data[0].phase = "Full Moon";
            ratio = 0;
          }
        })();
          break;

        case "Last Quarter": (() => {
          p.fill(255, 245, 200);
          p.arc(p.windowWidth / 2, p.windowHeight / 2, 500, 500, p.HALF_PI, -p.HALF_PI);
          p.fill(40);
          ratio = calcRatio(data[0].date, data[1].date, ratio);
          p.arc(p.windowWidth / 2, p.windowHeight / 2, (0 + (ratio / 500)), 500, p.HALF_PI, p.HALF_PI + p.PI);
          p.arc(p.windowWidth / 2, p.windowHeight / 2, 500, 500, p.HALF_PI + p.PI, p.HALF_PI);
          if ((500 - (ratio / 500)) <= 0) {
            data[0].phase = "New Moon";
            ratio = 0;
          }
        })();
          break;
      }

      phaseMod += .001;

      if (phaseMod >= 1.0) {
        phaseMod = 0;
      }
    }
  };
};