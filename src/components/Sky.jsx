import React from 'react';
import skySketch from '../sketches/skySketch.js';
import P5Wrapper from '../components/P5Wrapper.jsx';

import moment from 'moment';
import _ from 'lodash';

class Wave extends React.Component {
    constructor(props) {
        super(props);

        this.getData = this.getData.bind(this);
        this.getTime = this.getTime.bind(this);

        this.state = {
            error: null,
            data: null,
            isLoading: false,
        };
    };

    componentDidMount() {
        this.setState({ isLoading: true });
        this.getData();
        setInterval(this.getData, 60000);
    };

    componentWillUnmount() {
        clearInterval(this.getData);
    };

    getData() {
        const time = this.getTime();
        this.setState({ 
            data: time,
            isLoading: false,
        });
    };

    getTime() {
        const hour = moment().hour();
        const minute = moment().minute();

        const decimal = minute / 60;
        const time = hour + decimal;

        return time;
    };

    render() {
        if (this.state.isLoading) {
            return (
                <div>Loading...</div>
            );
        } else {
            return (
                <P5Wrapper sketch={skySketch} data={this.state.data} />
            );
        }
    };
}

export default Wave;