let phaseMod = 0;
let eD = 0;
let tD = 0;
let dOver = 0;

function drawLunarPhase(data) {
    if(data) {
        const moonPhase = data[0].phase;
        const progress = getTimeProgress();
        noStroke();

        switch(moonPhase) {
            case "New Moon": (() => {
                const ratio = calcRatio(data[0].date, data[1].date);
                fill(255,245,200);
                ellipse(windowWidth/2, windowHeight/2, 500);
                fill(40);
                arc(windowWidth/2, windowHeight/2, 500, 500, HALF_PI, HALF_PI + PI);
                arc(windowWidth/2, windowHeight/2, (500 - (500 / ratio)), 500, HALF_PI + PI, HALF_PI);
            })();
            break;

            case "Full Moon": (() => {
                arc(windowWidth/2, windowHeight/2, 500*phaseMod, 500, HALF_PI, HALF_PI + PI);
                arc(windowWidth/2, windowHeight/2, 500, 500, HALF_PI + PI, HALF_PI);
            })();
            break;

            case "First Quarter": (() => {
                arc(windowWidth/2, windowHeight/2, 500*phaseMod, 500, HALF_PI, HALF_PI + PI);
                arc(windowWidth/2, windowHeight/2, 500, 500, HALF_PI + PI, HALF_PI);
            })();
            break;

            case "Last Quarter": (() => {
                arc(windowWidth/2, windowHeight/2, 500*phaseMod, 500, HALF_PI, HALF_PI + PI);
                arc(windowWidth/2, windowHeight/2, 500, 500, HALF_PI + PI, HALF_PI);
            })();
            break;
        }

        phaseMod += .001;
        if(phaseMod>=1.0){
          phaseMod=0;
        }
    }
}

function calcRatio(currentDate, endDate) {
    let temp = currentDate.split(" ");
    currentDate = temp[2];
    temp = endDate.split(" ");
    endDate = temp[2];

    const ratio = (((endDate - currentDate) + getTimeProgress()) / 7.5);
    return ratio;
}

function calculateDayDifferenceFromCurrentDate(date) {
    const dateData = date.split(" ");
    const momentPhaseEnd = moment().year(dateData[0]).month(dateData[1]).date(dateData[2]);
    const currentDate = moment();

    const daysUntilPhaseEnd = Math.abs(Math.floor(moment.duration(momentPhaseEnd.diff(currentDate)).asDays()));

    return Math.abs(daysUntilPhaseEnd);
}

const getTimeProgress = () => 100-(moment.duration(moment().endOf('day').diff(moment())).asHours()/24*100);