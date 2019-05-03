export default function sketch(p) {
    var yoff = 0.0;
    var drop = [];
    var cloud = [];
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
        for (j = 0; j < 10; j++) {
            cloud[j] = new Cloud();
        }
    };

    p.draw = function () {
        if (data) {
            p.clear();

            switch (data) {
                case "Rain": renderRain();
                    break;

                case "Snow": renderSnow();
                    break;

                case "Clouds": renderClouds();
                    break;

                default: p.clear();
                    break;
            }
        }
    };

    function renderClouds() {
        for (var j = cloud.length - 1; j >= 0; j--) {
            cloud[j].show();
            cloud[j].float();
        }
    }

    function renderRain() {
        for (var j = drop.length - 1; j >= 0; j--) {
            drop[j].show("Rain");
            drop[j].fall();
        }
    }

    function renderSnow() {
        for (var j = drop.length - 1; j >= 0; j--) {
            drop[j].show("Snow");
            drop[j].fall();
        }
    }

    function Drop() {
        this.x = p.random(0, p.width);
        this.y = p.random(-1000, 0);
        this.show = function (type) {
            p.stroke(0, 47, 100);
            if (type === 'Rain') {
                p.line(this.x, this.y, this.x, this.y + 10);
            } else if (type === 'Snow') {
                p.ellipse(this.x, this.y, 10, 10);
            }
            if (this.y > p.height) {
                this.y = 0;
            }
        };
        this.fall = function() {
            this.y = this.y + p.random(1, 3);
        };
    }

    function Cloud() {
        this.x = p.random(0, -100);
        this.y = p.random(10, 50);
        this.show = function () {
            if (this.x > p.width) {
                this.x = 0;
            }
        };

        this.float = function() {
            this.x = this.x + p.random(1, 2);
            p.translate(this.x, this.y)
            p.noStroke();
            p.ellipse(100, 100, 30);
            p.ellipse(110, 110, 30);
            p.ellipse(120, 95, 50, 40);
            p.ellipse(130, 105, 30);
        }
    }
}
