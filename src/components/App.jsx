import React from "react"
import Moon from "./Moon.jsx"

class App extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    componentDidMount = () => {
        
    }

    render() {
        return(
            <div>
                <h1><Moon /></h1>
            </div>
        )
    }
}

export default App