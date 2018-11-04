function drawMeteorShower(meteors) {
    for(let i = 0; i < 40; i++) {
        fill(255,245,245);
        noStroke();
        ellipse(meteors[i][0],meteors[i][1],4);
    }
}