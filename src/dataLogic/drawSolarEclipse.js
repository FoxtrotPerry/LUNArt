
function drawSolarEclipse(data) {
    if (data) {
        if (testing) {
            daysUntilEclipse-=.05;
        }
        if (Math.abs(daysUntilEclipse+1) < 10) {
            tint(255, 255-(Math.abs(daysUntilEclipse)*17));
            imageMode(CENTER);
            image(solarEclipseImg, (windowWidth/2), (windowHeight/2)+5, 0);
        }
    }
}

function calculateDaysUntilEclipse(date) {
    const momentNextEclipseDate = moment().year(date.year).month(date.month-1).date(date.day);
    const currentDate = moment();

    const daysUntilEclipse = Math.abs(Math.floor(moment.duration(momentNextEclipseDate.diff(currentDate)).asDays()));

    return Math.abs(daysUntilEclipse);
}