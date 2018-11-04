let phaseMod = 0;
let eD = 0;
let tD = 0;
let dOver = 0;
var ratio = 0;

function drawLunarPhase(data) {
    if(data) {
        const moonPhase = data[0].phase;
        const progress = getTimeProgress();
        noStroke();

        switch(moonPhase) {
            case "New Moon": (() => {
                fill(255,245,200);
                arc(windowWidth/2, windowHeight/2, 500, 500, -HALF_PI, HALF_PI);
                fill(40);
                ratio = calcRatio(data[0].date, data[1].date, ratio);
                arc(windowWidth/2, windowHeight/2, 500, 500, HALF_PI, HALF_PI + PI);
                arc(windowWidth/2, windowHeight/2, (500 - (ratio / 500)), 500, HALF_PI + PI, HALF_PI);
                if((500 - (ratio / 500)) == 0) {
                    data[0].phase = "First Quarter";
                    ratio = 0;
                }
            })();
            break;

            case "Full Moon": (() => {
                
                fill(40);
                ellipse(windowWidth/2, windowHeight/2, 500);
                fill(255,245,200);
                ratio = calcRatio(data[0].date, data[1].date, ratio);
                arc(windowWidth/2, windowHeight/2, 500, 500, HALF_PI, HALF_PI + PI);
                arc(windowWidth/2, windowHeight/2, (500 - (ratio / 500)), 500, HALF_PI + PI, HALF_PI);
                if((500 - (ratio / 500)) == 0) {
                    data[0].phase = "Last Quarter";
                    ratio = 0;
                }
            })();
            break;

            case "First Quarter": (() => {
                fill(40);
                arc(windowWidth/2, windowHeight/2, 500, 500, HALF_PI, -HALF_PI);
                fill(255,245,200);
                ratio = calcRatio(data[0].date, data[1].date, ratio);
                arc(windowWidth/2, windowHeight/2, (0 + (ratio / 500)), 500, HALF_PI, HALF_PI + PI);
                fill(255,245,200);
                arc(windowWidth/2, windowHeight/2, 500, 500, HALF_PI + PI, HALF_PI);
                if((500 - (ratio / 500)) == 0) {
                    data[0].phase = "Full Moon";
                    ratio = 0;
                }
            })();
            break;

            case "Last Quarter": (() => {
                fill(255,245,200);
                arc(windowWidth/2, windowHeight/2, 500, 500, HALF_PI, -HALF_PI);
                fill(40);
                ratio = calcRatio(data[0].date, data[1].date, ratio);
                arc(windowWidth/2, windowHeight/2, (0 + (ratio / 500)), 500, HALF_PI, HALF_PI + PI);
                arc(windowWidth/2, windowHeight/2, 500, 500, HALF_PI + PI, HALF_PI);
                if((500 - (ratio / 500)) == 0) {
                    data[0].phase = "New Moon";
                    ratio = 0;
                }
            })();
            break;
        }

        phaseMod += .001;
        if(phaseMod>=1.0){
          phaseMod=0;
        }
    }
}

function calcRatio(currentDate, endDate, ratio) {
    // let temp = currentDate.split(" ");
    // currentDate = temp[2];
    // temp = endDate.split(" ");
    // endDate = temp[2];

    // const ratio = (((endDate - currentDate) + getTimeProgress()) / 7.5);
    return ratio + 10000;
}

function calculateDayDifferenceFromCurrentDate(date) {
    const dateData = date.split(" ");
    const momentPhaseEnd = moment().year(dateData[0]).month(dateData[1]).date(dateData[2]);
    const currentDate = moment();

    const daysUntilPhaseEnd = Math.abs(Math.floor(moment.duration(momentPhaseEnd.diff(currentDate)).asDays()));

    return Math.abs(daysUntilPhaseEnd);
}

const getTimeProgress = () => 100-(moment.duration(moment().endOf('day').diff(moment())).asHours()/24*100);