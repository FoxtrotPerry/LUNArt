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
        fetch(`URL_HERE`)
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
        const dates = {
            first: moment().format('YYYYMMDD'),
            second: moment().add(1, 'day').format('YYYYMMDD'),
        };

        return dates;
    }

    render() {
        if(this.state.error) {
            return (
                <div>ERROR: JSON ELEM HERE</div>
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