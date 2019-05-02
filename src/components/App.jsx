import React from "react"
import Moon from "./Moon.jsx"
import Wave from "./Wave.jsx"
import Meteors from "./Meteors.jsx"

class App extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div>
                <Wave />
                <Meteors />
                <Moon />
            </div>
        )
    }
}

export default App