import React from "react";

class App extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
        console.log("test");
    }

    render() {
        return(
            <div>
                <h1>Hello!</h1>
            </div>
        )
    }
}

export default App