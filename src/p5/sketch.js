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
  noLoop();
}

function draw() {
  background(200);
  drawSolarEclipse(solarEclipseData);
  drawLunarPhase(lunarPhaseData);
  drawAsteroids(asteroidsData);

}