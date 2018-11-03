var earthquakes;

function preload() {
  solarData = getSolarEclipses().then(function(solarRes) {
    console.log(solarRes);
  });
  phaseData = getLunarPhases().then(function(phaseRes) {
    console.log(phaseRes);
  });
  asteroidsData = getAsteroids().then(function(astRes) {
    console.log(astRes);
  });
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(200);
  // Get the magnitude and name of the earthquake out of the loaded JSON
  let earthquakeMag = earthquakes.features[0].properties.mag;
  let earthquakeName = earthquakes.features[0].properties.place;
  ellipse(width / 2, height / 2, earthquakeMag * 10, earthquakeMag * 10);
  textAlign(CENTER);
  text(earthquakeName, 0, height - 30, width, 30);
}