import React from 'react';
import waveSketch from '../sketches/waveSketch.js';
import P5Wrapper from '../components/P5Wrapper.jsx';

import moment from 'moment';
import _ from 'lodash';

class Wave extends React.Component {
    constructor(props) {
        super(props);

        this.getData = this.getData.bind(this);
        this.getDate = this.getDate.bind(this);

        this.state = {
            error: null,
            data: null,
            isLoading: false,
        };
    };

    componentDidMount() {
        this.setState({ isLoading: true });
        this.getData();
        setInterval(this.getData, 600000);
    };

    componentWillUnmount() {
        clearInterval(this.getData);
    };

    getData() {
        const dates = this.getDate();

        fetch(`https://tidesandcurrents.noaa.gov/api/datagetter?product=predictions&application=NOS.COOPS.TAC.WL&begin_date=${dates.first}&end_date=${dates.second}&datum=MLLW&station=8518995&time_zone=lst_ldt&units=english&interval=hilo&format=json`)
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.error) {
                        this.setState({
                            error: result.error.message
                        });
                    } else {
                        this.setState({
                            data: result.predictions,
                            isLoading: false
                        });
                        console.log('Fetching Moon Phase Data - SUCCESS');
                        console.log(this.state.data);
                    }
                },

                (error) => {
                    this.setState({
                        error: error.message,
                        isLoading: false
                    });
                }
            )
    };

    getDate() {
        const dates = {
            first: moment().format('YYYYMMDD'),
            second: moment().add(1, 'day').format('YYYYMMDD'),
        };

        return dates;
    };

    render() {
        if (this.state.error) {
            return (
                <div>ERROR: {this.state.error}</div>
            );
        } else if (this.state.isLoading) {
            return (
                <div>Loading...</div>
            );
        } else {
            return (
                <P5Wrapper sketch={waveSketch} data={this.state.data} />
            );
        }
    };
}

export default Wave;