function generateMeteorShower() {
    let meteorArray = [];
    for (let i = 0; i < 40; i++) {
        meteorArray.push([random(0,windowWidth),random(0,windowHeight),random(5,15)])
    }
    return meteorArray;
}