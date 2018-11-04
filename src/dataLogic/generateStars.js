function generateStars() {
    let starArray = [];// [[x],[y],[alpha]]
    for (let i = 0; i < 125; i++) {
        starArray.push([[random(0,windowWidth)],[random(0,windowHeight)],[random(100,200)]]);
    }
    return starArray;
}