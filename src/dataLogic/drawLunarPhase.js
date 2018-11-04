function drawLunarPhase(data) {
    let percentage = 0;
    switch (data.phase) {
        case "Full Moon": percentage = 100;
        break;
        
        case "Half Moon": percentage = 50;
        break;

        case "Quarter Moon": percentage = 25;
        break;
    }
    ellipse(50, 50, 50, 50);
}