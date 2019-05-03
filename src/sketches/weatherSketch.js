export default function sketch(p) {
    var yoff = 0.0;
    var drop = [];
    var data;

    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
        if (props.data) {
            data = props.data
        }
    };

    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
        for (var j = 0; j < 500; j++) {
            drop[j] = new Drop();
        }
    };

    p.draw = function () {
        p.clear();
        for (var j = drop.length - 1; j >= 0; j--) {
            drop[j].show();
            drop[j].fall();
        }

    };

    function Drop() {
        this.x = p.random(0, p.width);
        this.y = p.random(-1000, 0);
        this.show = function () {
            p.stroke(0, 47, 100);
            p.line(this.x, this.y, this.x, this.y + 10);
            if (this.y > p.height) {
                this.y = 0;
            }
        };
        this.fall = function () {
            this.y = this.y + p.random(1, 3);
        };
    }
}
