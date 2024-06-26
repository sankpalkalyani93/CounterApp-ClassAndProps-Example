import { Component } from 'react';
import './App.css';
import Counter from './Counter';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      count: 0,
    }
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1}));
  }

  decrement = () => {
    this.setState((prevState) => ({ count : prevState.count - 1}));
  }

  render(){
  
    return (
      <div className="App">
        <Counter 
          count={this.state.count}
          increment={this.increment}
          decrement={this.decrement}
        />
      </div>
    );
  }
}

export default App;
