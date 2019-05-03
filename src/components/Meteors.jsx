import React from 'react'
import meteorSketch from '../sketches/meteorSketch.js'
import P5Wrapper from '../components/P5Wrapper.jsx'

import _ from 'lodash'
import moment from 'moment'

class Meteors extends React.Component {
    constructor(props) {
        super(props);

        this.getDate = this.getDate.bind(this)
        this.getData = this.getData.bind(this)

        this.state = {
            error: null,
            data: null,
            isLoading: false,
            debug: false
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

    /*
        FETCH URL TAKEN FROM MOON.JSX DUE TO LACK OF METEOR DATA

        IS SIMPLY PLACE HOLDER (notice lack of state change)
    */
        const date = this.getDate();
        fetch(`http://api.usno.navy.mil/moon/phase?date=${date}&nump=2`)
            .then(res => res.json())
            .then(
                (result) => {
                    if(result.error) {
                        this.setState({
                            //error: // JSON ELEM HERE
                        });
                    } else {
                        this.setState({
                            // data: // JSON ELEM HERE
                            isLoading: false
                        })
                        console.log('Meteor Data Fetch - SUCCESS');
                    }
                },

                (error) => {
                    this.setState({
                        // error: ,// JSON ELEM HERE
                        isLoading: false
                    })
                }
            )
    };

    getDate() {
        const currentYear = new Date().getFullYear();
        const currentDay = new Date().getDate();
        const currentMonth = new Date().getMonth() + 1;
        const date = currentMonth + '/' + currentDay + '/' + currentYear;

        return date;
    };
    

    render() {
        if(this.state.error) {
            return (
                <div>ERROR: {this.state.error}</div>
            );
        } else if (this.state.isLoading) {
            return (
                <div>Loading...</div>
            );
        } else {
            return (
                <P5Wrapper sketch={meteorSketch} data={this.state.data} />
            );
        }
    }
}


export default Meteors;