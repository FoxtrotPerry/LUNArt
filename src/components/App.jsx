import React from "react"
import Moon from "./Moon.jsx"
import Wave from "./Wave.jsx"
<<<<<<< HEAD
import Meteors from "./Meteors.jsx"
=======
import Sky from "./Sky.jsx"
>>>>>>> d3a76ae63438ca52b0cb5e7f618cbf71e9fe0758

//https://editor.p5js.org/projects/SkXAr20Jx TODO WEATHER
class App extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div>
<<<<<<< HEAD
                <Wave />
                <Meteors />
=======
                <Sky />
>>>>>>> d3a76ae63438ca52b0cb5e7f618cbf71e9fe0758
                <Moon />
                <Wave />
            </div>
        )
    }
}

export default App