import React from 'react'
import moment from 'moment'
import waveSketch from '../sketches/waveSketch.js'
import P5Wrapper from "../components/P5Wrapper.jsx"

class Wave extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            data: null,
            isLoaded: false,
        };
    }

    componentDidMount() {
        const date = moment().format('YYYYMMDD');
        const date2 = moment().add(1, 'days').format('YYYYMMDD');

        fetch(`https://tidesandcurrents.noaa.gov/api/datagetter?product=predictions&application=NOS.COOPS.TAC.WL&begin_date=${date}&end_date=${date2}&datum=MLLW&station=8518995&time_zone=lst_ldt&units=english&interval=hilo&format=json`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        data: result.predictions,
                    });
                    console.log('Fetching Wave Data - SUCCESS');
                    console.log(this.state.data);
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
            return (
                <div>ERROR: {this.state.error.message}</div>
            );
        } else if (!this.state.isLoaded) {
            return (
                <div>Loading...</div>
            );
        } else {
            return (
                <P5Wrapper sketch={waveSketch} data={this.state.data} />
            );
        }
    }
}

export default Wave;