function drawStars(stars) {
    for(let i = 0; i < 125; i++) {
        fill(245,245,255,stars[i][2][0]);
        noStroke();
        ellipse(stars[i][0][0],stars[i][1][0],4);
    }
}