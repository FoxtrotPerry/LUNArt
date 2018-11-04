phaseMod = 0;

function drawLunarPhase(data) {
    moonPhase = data.phase;
    switch(moonPhase) {
        case('New Moon'): (function(phaseMod) {
            noStroke();
            fill(40);
            ellipse(windowWidth/2, windowHeight/2, 500);
            fill(255,245,200);
            arc(windowWidth/2, windowHeight/2, 500*phaseMod, 500,HALF_PI,HALF_PI+PI);
            arc(windowWidth/2, windowHeight/2, 500, 500, HALF_PI+PI,HALF_PI);
        })();
        
        case("Full Moon"): (function(phaseMod) {
            noStroke();
            fill(40);
            ellipse(windowWidth/2, windowHeight/2, 500);
            fill(255,245,200);
            arc(windowWidth/2, windowHeight/2, 500*phaseMod, 500,HALF_PI,HALF_PI+PI);
            arc(windowWidth/2, windowHeight/2, 500, 500, HALF_PI+PI,HALF_PI);
        })();

        case("First Quarter"): (function(phaseMod) {
            noStroke();
            fill(40);
            ellipse(windowWidth/2, windowHeight/2, 500);
            fill(255,245,200);
            arc(windowWidth/2, windowHeight/2, 500*phaseMod, 500,HALF_PI,HALF_PI+PI);
            arc(windowWidth/2, windowHeight/2, 500, 500, HALF_PI+PI,HALF_PI);
        })();

        case("Last Quarter"): (function(phaseMod) {
            noStroke();
            fill(40);
            ellipse(windowWidth/2, windowHeight/2, 500);
            fill(255,245,200);
            arc(windowWidth/2, windowHeight/2, 500*phaseMod, 500,HALF_PI,HALF_PI+PI);
            arc(windowWidth/2, windowHeight/2, 500, 500, HALF_PI+PI,HALF_PI);
        })();
    }
}