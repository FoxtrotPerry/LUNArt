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
  background(0,5,60);
  drawSolarEclipse(solarEclipseData);
  drawLunarPhase(lunarPhaseData);
  drawAsteroids(asteroidsData);
  phaseMod += .001;
  if(phaseMod>=1.0){
    phaseMod=0;
  }
}