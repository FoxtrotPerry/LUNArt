
let dayDifference = 60;

function drawSolarEclipse(data) {
    //Eclipse
    if (data) {
        dayDifference-= 0.25;
        const currentDay = new Date().getDay();
    
        if (Math.abs(dayDifference+1) < 10) {
            tint(255, 255-(Math.abs(dayDifference)*25));
            image(solarEclipseImg, (windowWidth/2)-450, 50, 0);
        }
        
        //Sun    
    
        fill('yellow');
        ellipse((windowWidth/2 + dayDifference), windowHeight/2, 510, 510);
    }
}