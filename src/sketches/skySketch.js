export default function sketch(p) {
    var data;
    var skyMap;

    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
        if (props.data) {
            data = props.data
        }
    };

    p.draw = function () {
        if (data != undefined) {
            p.clear();

            const c1 = p.color('#00B5FF'); // Blue
            const c2 = p.color("#000000"); // Black

            let lerpAmount = (data <= 11 ? data / 11 : (23-data) / 11);
            lerpAmount = lerpAmount > 1 ? "100" : lerpAmount*100;
            lerpAmount = lerpAmount <= 0 ? "1" : lerpAmount;
            const backgroundColor = p.color(`hsl(210, 30%, ${lerpAmount}%)`);//p.lerpColor(c1, c2, lerpAmount);
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
        p.frameRate(60);
        skyMap = new Map([
            [0, "#000000"],
            [1, "#000000"],
            [2, "#000000"],
            [3, "#001219"],
            [4, "#002433"],
            [5, "#00364C"],
            [6, "#006C99"],
            [7, "#0090CC"],
            [8, "#007EB2"],
            [9, "#005A7f"],
            [10, "#004866"],
            [11, "#004866"],
        ]);
    };
};