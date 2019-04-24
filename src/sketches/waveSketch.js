export default function sketch(p) {
    var yoff = 0.0;

    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
        if (props.data) {
            p.draw(props.data);
        }
    };

    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
        var x = p.width / 2;
        var y = p.height;
    };

    p.draw = function (data) {
        p.clear()
        p.fill(0, 0, 255);
        // We are going to draw a polygon out of the wave points
        p.beginShape();

        let xoff = 0; // Option #1: 2D Noise
        // let xoff = yoff; // Option #2: 1D Noise

        // Iterate over horizontal pixels
        for (let x = 0; x <= p.width; x += 10) {
            // Calculate a y value according to noise, map to

            // Option #1: 2D Noise
            let y = p.map(p.noise(xoff, yoff), 0, 1, 200, 300);

            // Option #2: 1D Noise
            // let y = map(noise(xoff), 0, 1, 200,300);

            // Set the vertex
            p.vertex(x, y);
            // Increment x dimension for noise
            xoff += 0.05;
        }
        // increment y dimension for noise
        yoff += 0.01;
        p.vertex(p.width, p.height);
        p.vertex(0, p.height);
        p.endShape(p.CLOSE);
    };
};