// @flow
import React from 'react';
import ReactDom from 'react-dom';
import './App.css';

class MyComp extends React.Component {
  state = {
    val : 0,
    m: 1
  }

  inc: number

  constructor() {
    super();
  }

  update = () => {
    this.setState({val : this.state.val + 1});
  }

  render() {
    console.log("render");
    return (
      <button onClick={this.update}>{this.state.val * this.state.m}</button>
    );
  }

  componentWillMount() {
    this.setState({m: 2});
    console.log("componentWillMount");
    this.inc = setInterval(this.update, 500)
  }

  componentDidMount() {
    console.log("componentDidMount");
    console.log(ReactDom.findDOMNode(this));
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.inc);
  }
}

class Wrapper extends React.Component {
  mount(){
    ReactDom.render(<MyComp />, document.getElementById('a'))
  }

  unmount(){
    ReactDom.unmountComponentAtNode(document.getElementById('a'))
  }

  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>UnMount</button>
        <div id="a"></div>
      </div>
    )
  }
}

export default Wrapper;
