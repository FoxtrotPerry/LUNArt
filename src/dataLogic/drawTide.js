var yoff = 0.0;
var min = 0;
var max = 0;
testingTide = false;

function drawTide(data) {
    if(testingTide){
        min = 600;
        max = 650;
    } else {
        min = 800;
        max = 900;
    }
    fill(155, 155, 255, 100);
    beginShape();
    var xoff = 0;
    for(var x = 0; x <= width+10; x += 50) {
        var y = map(noise(xoff, yoff), 0, 1, min, max);
        vertex(x, y);
        xoff += 0.05;
    }
    yoff += 0.01;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
    
}