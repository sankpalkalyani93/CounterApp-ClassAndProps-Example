import React, { Component } from "react";

class Counter extends Component {

    render(){

        return (
            <div>
                <h2>Counter App : {this.props.count}</h2>
                <p><button onClick={this.props.increment}>Increment</button></p>
                <p><button onClick={this.props.decrement}>Decrement</button></p>
            </div>
        );
    }
}

export default Counter;