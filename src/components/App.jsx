import React from "react"
import Moon from "./Moon.jsx"
import Wave from "./Wave.jsx"
import Meteors from "./Meteors.jsx"
import Sky from "./Sky.jsx"

//https://editor.p5js.org/projects/SkXAr20Jx TODO WEATHER
class App extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div>
                <Wave />
                <Sky />
                <Moon />
                <Wave />
            </div>
        )
    }
}

export default App