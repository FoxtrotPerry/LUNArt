let solarEclipseData, lunarPhaseData, asteroidsData;
let tick = 0;

const updateData = async() => {
  //console.log(tick % 60)
  if (tick % 60 === 0) {
    console.log('query')
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