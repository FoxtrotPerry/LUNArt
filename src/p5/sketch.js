let solarEclipseData, lunarPhaseData, asteroidsData, daysUntilEclipse, solarEclipseImg, testing = false, daysUntilPhaseEnd, tideData;

daysUntilEclipse = 50;

const updateData = async () => {
    solarEclipseData = await getSolarEclipses();
    daysUntilEclipse = calculateDaysUntilEclipse(solarEclipseData);
    lunarPhaseData = await getLunarPhases();
    tideData = await getTideData();
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
  drawSun();
  drawLunarPhase(lunarPhaseData);
  drawTide(tideData);
  drawSolarEclipse(solarEclipseData);
  drawAsteroids(asteroidsData);
}

function keyTyped() {
  switch(key) {
    case '1': testing = !testing;
    break;

    case '2': (() => {
      daysUntilEclipse = calculateDaysUntilEclipse(solarEclipseData);
    })();
    break;
  }
}