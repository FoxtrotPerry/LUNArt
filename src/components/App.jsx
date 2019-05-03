import React from "react"
import Moon from "./Moon.jsx"
import Wave from "./Wave.jsx"
import Sun from "./Sun.jsx"

class App extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div>
                <Wave />
                <Sun />
                <Moon />
            </div>
        )
    }
}

export default App