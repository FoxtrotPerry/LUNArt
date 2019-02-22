import { randomBytes } from "crypto";

export default function sketch (p) {
    let x = 0;
    let y = 0;
  
    p.setup = function () {
      p.createCanvas(p.windowWidth, p.windowHeight);
      x = p.width / 2;
      y = p.height
    };
  
    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
      if (props.rotation){
        rotation = props.rotation * Math.PI / 180;
      }
    };

    p.draw = function () {
      p.background(200);
      p.stroke(50);
      p.fill(100);
      p.ellipse(x, y, 24, 24);
      x = x + p.random(-2, 2);
      y = y - 1;
    };
  };