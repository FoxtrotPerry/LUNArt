export default function sketch(p) {
    var data;
    var skyMap;

    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
        if (props.data) {
            data = props.data
        }
    };

    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
        var x = p.width / 2;
        var y = p.height;
        // skyMap = new Map([
        //     [1,],
        //     [2,],
        //     [3,],
        //     [4,],
        //     [5,],
        //     [6,],
        //     [7,],
        //     [8,],
        //     [9,],
        //     [10,],
        //     [11,],
        //     [12,],
        //     [13,],
        //     [14,],
        //     [15,],
        //     [16,],
        //     [17,],
        //     [18,],
        //     [19,],
        //     [20,],
        //     [21,],
        //     [22,],
        //     [23,],
        //     [24,]
        // ]);
    };

    p.draw = function () {
        if (data) {
            p.clear();
            var c1 = p.color(204, 102, 0);
            var c2 = p.color(50, 102, 153);
            setGradient(0, 0, 2000, 1000, c2, c1);
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
};