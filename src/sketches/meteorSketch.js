export default function sketch(p) {
    var data;
    var meteorArray = [];
    const meteorAmt = 20;

    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
        if (props.data) {
            data = props.data
        }
    };

    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        for (let i = 0; i < meteorAmt; i++) {
            meteorArray[i] = new Meteor();
        }
        console.log(meteorArray)
    }

    p.draw = () => {
        // if (data != undefined) { // left out due to lack of meteor data :c
            p.clear();
            for (let i = 0; i < meteorAmt; i++) {

                meteorArray[i].checkPos()
                meteorArray[i].draw()
                meteorArray[i].stepPos()
            }
        // }
    }

    function Meteor() {
        this.x = p.random(-300, p.windowWidth)
        this.y = p.random(-p.windowHeight*0.5,0)
        this.speedMult = p.random(0.5,1.5)
        this.sizeMult = (this.speedMult>1) ? (this.speedMult-Math.abs(this.speedMult-1)*2):(this.speedMult+Math.abs(this.speedMult-1)*2)
        this.theta_X = 0.3
        this.theta_Y = 0.5

        this.draw = () => {
            p.noStroke()
            p.fill(50,50,50);
            p.ellipse(this.x,this.y,10*this.sizeMult)
            p.fill(200,200,200)
            p.ellipse(this.x,this.y,5*this.sizeMult)
        }
        
        this.stepPos = () => {
            this.y += (this.theta_Y * this.speedMult)
            this.x += (this.theta_X * this.speedMult)
        }

        this.checkPos = () => {
            if(this.y > p.windowHeight) {
                this.y = 0
                this.x = p.random(-300, p.windowWidth)
            }
        }
    }
}