export default function sketch(p) {
    let x = 0;
    let y = 0;

    let daysUntilEclipse;

    p.draw = function() {
        if (daysUntilEclipse) {
            p.clear();
            p.fill('yellow');
            p.ellipse((p.windowWidth/2 + daysUntilEclipse*-20), (p.windowHeight/2)+18, 500, 500);
        }
    }

    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
        if (props.daysUntilEclipse) {
            daysUntilEclipse = props.daysUntilEclipse;
        }
    }

    p.setup = function() {
        p.createCanvas(p.windowWidth, p.windowHeight);
    }

}
