let solarEclipseData, lunarPhaseData, asteroidsData, daysUntilEclipse, solarEclipseImg;

const updateData = async () => {
    solarEclipseData = await getSolarEclipses();
    daysUntilEclipse = calculateDaysUntilEclipse(solarEclipseData);
    lunarPhaseData = await getLunarPhases();
    //asteroidsData = await getAsteroids();
}
setInterval(updateData, 60*60*24*1000);

async function preload() {
  updateData();
  solarEclipseImg = loadImage("assets/solar-eclipse.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 5, 60);
  drawSolarEclipse(solarEclipseData);
  drawLunarPhase(lunarPhaseData);
  drawAsteroids(asteroidsData);
}

