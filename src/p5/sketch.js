let solarEclipseData, lunarPhaseData, asteroidsData;
let tick = 0;

const updateData = async() => {
  if (tick % 60 === 0) {
    solarData = await getSolarEclipses();
    lunarPhaseData = await getLunarPhases();
    //asteroidsData = await getAsteroids();
  }
}

async function preload() {
  updateData();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  tick++;
  background(0,5,60);
  drawSolarEclipse(solarEclipseData);
 // drawLunarPhase(lunarPhaseData);
  drawAsteroids(asteroidsData);
  updateData();
}