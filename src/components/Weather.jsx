import React from 'react';
import moment from 'moment';
import weatherSketch from '../sketches/weatherSketch.js';
import skySketch from '../sketches/skySketch.js';
import P5Wrapper from '../components/P5Wrapper.jsx';

class Weather extends React.Component {
    constructor(props) {
        super(props);

        this.getData = this.getData.bind(this);
        this.getTime = this.getTime.bind(this);

        this.state = {
            error: null,
            data: null,
            time: null,
            debug: null,
            isLoading: false,
        };
    };

    componentDidMount() {
        window.addEventListener('keydown', this.keyboardInput);
        this.setState({ isLoading: true });
        this.getData();
        this.getTime();
        setInterval(this.getData, 600000);
        setInterval(this.getTime, 60000);
    };

    componentWillUnmount() {
        clearInterval(this.getData);
        window.removeEventListener('keydown', this.keyboardInput);
    };

    getData() {

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Utica&appid=ad6e239ec0ac58d0a9836e942aac97eb`)
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.error) {
                        // this.setState({
                        //     error: result.error.message
                        // });
                        console.log(result);
                    } else {
                        this.setState({
                            data: result.weather[0].main,
                            isLoading: false
                        });
                        console.log('Fetching Weather Data - SUCCESS');
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

    getTime() {
        const hour = moment().hour();
        const minute = moment().minute();

        const decimal = minute / 60;
        const currentTime = hour + decimal;

        this.setState({ time: currentTime });
    }

    keyboardInput = (e) => {
        const code = e.keyCode;

        if(code == 49) {
            this.setState({ debug: 'Rain' });
        } else if (code == 50) {
            this.setState({ debug: 'Snow' });
        }  else if (code == 51) {
            this.setState({ debug: 'Clouds' });
        } else {
            this.setState({ debug: null });
        }
    } 

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
                <div>
                    <P5Wrapper sketch={skySketch} data={this.state.time}/>
                    <P5Wrapper sketch={weatherSketch} data={this.state.data} debug={this.state.debug} />
                </div>
            );
        }
    };
}

export default Weather;