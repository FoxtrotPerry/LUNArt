let solarEclipseData, lunarPhaseData, asteroidsData;

const updateData = async() => {
  solarData = await getSolarEclipses();
  lunarPhaseData = await getLunarPhases();
  //asteroidsData = await getAsteroids();
}

async function preload() {
  updateData();
}

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(0,5,60);
  drawSolarEclipse(solarEclipseData);
  drawLunarPhase(lunarPhaseData);
  drawAsteroids(asteroidsData);
  updateData();
}