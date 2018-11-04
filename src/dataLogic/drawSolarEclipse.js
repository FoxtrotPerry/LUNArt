
function drawSolarEclipse(data) {
    //Eclipse
    if (data) {
        const currentDay = new Date().getDay();
        const dayDifference = 2;
        if (dayDifference < 5) {
            image(solarEclipseImg, (windowWidth/2)-450, 50, 0);
        }
        
        //Sun    
    
        fill('yellow');
        ellipse((windowWidth/2 + dayDifference) * 1.2, windowHeight/2, 510, 510);
    }
}