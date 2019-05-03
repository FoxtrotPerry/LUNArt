export default function sketch(p) {
    var yoff = 0.0;
    var drop = [];
    var cloud = [];
    var data;
    var debug;

    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
        if(props.debug) {
            debug = props.debug
            console.log(debug);
        } else if (props.data) {
            debug = null;
            data = props.data
        }
    };

    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
        for (var j = 0; j < 500; j++) {
            drop[j] = new Drop();
        }
        for (j = 0; j < 20; j++) {
            cloud[j] = new Cloud();
        }
    };

    p.draw = function () {
        if (debug != null) {
            p.clear();

            switch (debug) {
                case "Rain": renderRain();
                    break;

                case "Snow": renderSnow();
                    break;

                case "Clouds": renderClouds();
                    break;

                default: p.clear();
                    break;
            }
        } else if (data) {
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
            cloud[j].draw();
            cloud[j].checkPos();
            cloud[j].stepPos();
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
            this.y = this.y + p.random(1, 6);
        };
    }

    function Cloud() {
        this.x = p.random(-p.windowWidth,p.windowWidth-200)
        this.y = p.random(10, 50);
        this.shade = p.random(210,255)
        this.speedMult = p.random(1.25,1.75)
        this.sizeMult = (this.speedMult>1) ? (this.speedMult-Math.abs(this.speedMult-1.5)*2):(this.speedMult+Math.abs(this.speedMult-1.5)*2)
        this.show = function () {
            if (this.x > p.width) {
                this.x = 0;
            }
        };

        this.draw = function() {
            p.noStroke()
            p.fill(this.shade)
            p.ellipse(this.x+100*this.sizeMult, this.y+70*this.sizeMult, 60*this.sizeMult);
            p.ellipse(this.x+140*this.sizeMult, this.y+70*this.sizeMult, 70*this.sizeMult);
            p.ellipse(this.x+170*this.sizeMult, this.y+110*this.sizeMult, 70*this.sizeMult);
            p.ellipse(this.x+120*this.sizeMult, this.y+110*this.sizeMult, 80*this.sizeMult);
            p.ellipse(this.x+70*this.sizeMult, this.y+110*this.sizeMult, 75*this.sizeMult);
        }

        this.stepPos = () => {
            this.x += this.speedMult
        }

        this.checkPos = () => {
            if(this.x > p.windowWidth) {
                this.x = p.random(-400,-200)
            }
        }
    }
}
