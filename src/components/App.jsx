import React from "react"
import Moon from "./Moon.jsx"
import Wave from "./Wave.jsx"

class App extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div>
                <Wave />
                <Moon />
            </div>
        )
    }
}

export default App