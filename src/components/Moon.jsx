import React from 'react'
import moonSketch from '../sketches/moonSketch.js'
import P5Wrapper from "../components/P5Wrapper.jsx"

class Moon extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            data: null,
            isLoaded: false,
        };
    }

    componentDidMount() {
        //Get the current date for Fetch call 
        const currentYear = new Date().getFullYear();
        const currentDay = new Date().getDate();
        const currentMonth = new Date().getMonth()+1;
        const date = currentMonth + '/' + currentDay + '/' + currentYear;

        fetch(`http://api.usno.navy.mil/moon/phase?date=${date}&nump=2`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        data: result.phasedata,
                    });
                },

            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )

    }

    render() {
        if (this.state.error) {
            return(
                <div>ERROR: {this.state.error.message}</div>
            );
        } else if (!this.state.isLoaded) {
            return(
                <div>Loading...</div>
            );
        } else {
            return(
                <P5Wrapper sketch={moonSketch} data={this.state.data} />
            );
        }
    }
}

export default Moon;