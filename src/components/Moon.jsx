import React from 'react'
import moonSketch from '../sketches/moonSketch.js'
import P5Wrapper from "../components/P5Wrapper.jsx"

class Moon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount = () => {

    }

    getLunarPhases = () => {
        const currentYear = new Date().getFullYear()
        const currentDay = new Date().getDate()
        const currentMonth = new Date().getMonth()
        const date = currentMonth + '/' + currentDay + '/' + currentYear

        return new Promise((resolve, reject) => {
            fetch(`http://api.usno.navy.mil/moon/phase?date=${date}&nump=2`).then(res => {
                if (!res.data.phasedata) {
                    resolve(res.data.phasedata)
                }
            })
                .catch(e => reject(e))
        })
    }



    render() {
        
        return (
            <P5Wrapper sketch={moonSketch}/>
        )
    }
}

export default Moon