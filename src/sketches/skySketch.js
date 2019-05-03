export default function sketch(p) {
    var data;
    var skyMap;
    var debug;

    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
        if (props.data) {
            data = props.data;
            debug = props.debug;
        }

        if(debug) {
            changeFrameRate();
        }
    };

    p.draw = function () {
        if (data != undefined) {
            p.clear();
            if(debug) {
                if(data < 24) {
                    data += .1;
                } else {
                    data = 1;
                }
            }

            let lerpAmount = (data <= 11 ? data / 11 : (23-data) / 11);
            lerpAmount = lerpAmount > 1 ? "65" : lerpAmount*65;
            lerpAmount = lerpAmount <= 0 ? "1" : lerpAmount;
            const backgroundColor = p.color(`hsl(210, 50%, ${lerpAmount}%)`);//p.lerpColor(c1, c2, lerpAmount);
            p.background(backgroundColor);
            // setGradient(0, 0, 2000, 1000, c2, c1);
        }
    };

    function setGradient(x, y, w, h, c1, c2) {
        p.noFill();
            // Top to bottom gradient
            for (let i = y; i <= y + h; i++) {
                let inter = p.map(i, y, y + h, 0, 1);
                let c = p.lerpColor(c1, c2, inter);
                p.stroke(c);
                p.line(x, i, x + w, i);
        }
    }

    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
        var x = p.width / 2;
        var y = p.height;
    };

    function changeFrameRate() {
        if(debug) {
            p.frameRate(5);
        } else {
            p.frameRate(60);
        }
    }
};