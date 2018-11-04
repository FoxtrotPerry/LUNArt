var yoff = 0.0;

function drawTide(data) {

    fill(155, 155, 255, 100);
    beginShape();
    var xoff = 0;
    for(var x = 0; x <= width+10; x += 50) {
        var y = map(noise(xoff, yoff), 0, 1, 700, 800);
        vertex(x, y);
        xoff += 0.05;
    }
    yoff += 0.01;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
}