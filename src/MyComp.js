// @flow
import React from 'react';
import './App.css';

class MyComp extends React.Component {
  state = {
    val : 0
  }

  constructor() {
    super();
  }

  update() {
    this.setState({val : this.state.val + 1});
  }

  render() {
    console.log("render");
    return (
      <button onClick={this.update.bind(this)}>{this.state.val}</button>
    );
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}

export default MyComp;
