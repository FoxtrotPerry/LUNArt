let solarEclipseImg;
let solarEclipseData, lunarPhaseData, asteroidsData;
let tick = 0;

const updateData = async() => {
  if (tick % 60 === 0) {
    solarEclipseData = await getSolarEclipses();
    lunarPhaseData = await getLunarPhases();
    //asteroidsData = await getAsteroids();
  }
}

async function preload() {
  updateData();
  solarEclipseImg = loadImage("assets/solar-eclipse.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  tick++;
  background(0, 5, 60);
  drawLunarPhase(lunarPhaseData);
  drawSolarEclipse(solarEclipseData);
  drawAsteroids(asteroidsData);
  updateData();
}