import React from "react"
import P5Wrapper from "react-p5-wrapper"
import moonSketch from "../sketches/moonSketch.js"

class Moon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = () => {

    }
    
    render() {
        return(
            <P5Wrapper sketch={moonSketch} />
        )
    }
}

export default Moon