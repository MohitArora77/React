import { React,  Component } from "react";

export default class LifeCycleInCBC extends Component {
  state = { count: 0 };
  // For Mounting
  componentDidMount() {
    console.log("Component Mounted");
  }
  // For Updating
  componentDidUpdate() {
    console.log("Component Updated");
  }
  // For Unmounting
  componentWillUnmount() {
    console.log("Component Unmounted");
  }
  render() {
    return (
      <div>
        LifeCycleInCBC
        <h1>Count is {this.state.count} </h1>
        <button
          className="bg-cyan-400 border-2"
          on
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Update
        </button>
      </div>
    );
  }
}
