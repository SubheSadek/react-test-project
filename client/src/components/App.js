import React, { Component } from "react";
import Card from "./Cards";
import Form from "./Form";

class App extends Component{
    render(){
        return(
            <span>
                <Form />
                <Card />
            </span>
        )
    }
}

export default App;