import { Component } from "react";

class StatesInCbc extends Component {
  state = { count: 0 };

  // no need to use let var const in method (a function inside a class or object)
  // a function can be created inside the function
  incre = () => {
    this.setState({ count: this.state.count + 1 });
    // this.setState create  object name count
    // object
  };
  decre = () => {
    if (this.state.count>0){
    this.setState({ count: this.state.count - 1 });
    }
  };
  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    // console.log(this);
    // TO shows about the class in console -> state -> count
    // Show Current Class

    return (
      <div>
        <h1> States in Cbc : {this.state.count}</h1>
        <button onClick={this.incre}>Increment</button>
        <br />
        <br />
        <button onClick={this.decre}>Decrement</button>
        <br />
        <br />
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default StatesInCbc;
