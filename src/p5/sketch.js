let solarEclipseData, lunarPhaseData, asteroidsData;

function preload() {
  solarData = getSolarEclipses().then(function(solarRes) {
    solarEclipseData = solarRes;
  });
  lunarPhaseData = getLunarPhases().then(function(phaseRes) {
    phaseData = phaseRes;
  });
  asteroidsData = getAsteroids().then(function(astRes) {
    asteroidsData = astRes;
  });
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200);
  ellipse(56, 46, 55, 55);
  drawSolarEclipse(solarEclipseData);
  drawLunarPhase(lunarPhaseData);
  drawAsteroids(asteroidsData);
}