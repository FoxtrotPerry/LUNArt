let meteors, solarEclipseData, lunarPhaseData, asteroidsData, daysUntilEclipse, solarEclipseImg, stars, testing = false, daysUntilPhaseEnd;

daysUntilEclipse = 50;

const updateData = async () => {
    solarEclipseData = await getSolarEclipses();
    daysUntilEclipse = calculateDaysUntilEclipse(solarEclipseData);
    lunarPhaseData = await getLunarPhases();
    //tideData = await getTideData();
    //asteroidsData = await getAsteroids();
}
setInterval(updateData, 60*60*24*1000);

async function preload() {
  stars = generateStars();
  meteors = generateMeteorShower();
  updateData();
  solarEclipseImg = loadImage("assets/solar-eclipse.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 5, 60);
  drawStars(stars);
  drawMeteorShower(meteors);
  drawSun();
  drawLunarPhase(lunarPhaseData);
  drawSolarEclipse(solarEclipseData);
  drawMeteorShower(meteors);
  drawTide();
  meteors = updateMeteors(meteors,windowWidth);
}

function keyTyped() {
  switch(key) {
    case '1': testing = !testing;
    break;

    case '2': (() => {
      daysUntilEclipse = calculateDaysUntilEclipse(solarEclipseData);
    })();
    break;

    case '3': testingTide = !testingTide;
    break;
  }
}