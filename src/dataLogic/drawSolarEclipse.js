const eclipse = {x: 30, y: 50};

function drawSolarEclipse(data) {
    //Eclipse
    if (data) {
        const currentDay = new Date().getDay();
        const dayDifference = Math.abs(data.day-currentDay);
        image(solarEclipseImg, eclipse.x, eclipse.y, 0);
    }

    //Sun
}