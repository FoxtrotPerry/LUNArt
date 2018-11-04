phaseMod = 0;

function drawLunarPhase(data) {
    let percentage = 0;
    switch (data.phase) {
        case "Full Moon": percentage = 100;
        break;
        
        case "Half Moon": percentage = 50;
        break;

        case "Quarter Moon": percentage = 25;
        break;
    }
    noStroke();
    fill(40);
    ellipse(windowWidth/2, windowHeight/2, 500);
    fill(255,245,200);
    arc(windowWidth/2, windowHeight/2, 500*phaseMod, 500,HALF_PI,HALF_PI+PI);
    arc(windowWidth/2, windowHeight/2, 500, 500, HALF_PI+PI,HALF_PI);
}