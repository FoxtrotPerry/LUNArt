export default function sketch(p) {
    const solarEclipseImg = p.loadImage("assets/solar-eclipse.png");
    let daysUntilEclipse;
    p.draw = function () {
        if (daysUntilEclipse && daysUntilEclipse < 10) {            
            p.clear();
            p.tint(255, 255-(Math.abs(daysUntilEclipse)*17));
            p.imageMode(p.CENTER);
            p.image(solarEclipseImg, (p.windowWidth/2), (p.windowHeight/2)+5, 0);
        }
    }

    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
        if (props.daysUntilEclipse) {
            daysUntilEclipse = props.daysUntilEclipse;
        }
    }

    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
    }

}
