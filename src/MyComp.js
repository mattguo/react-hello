// @flow
import React from 'react';
import ReactDom from 'react-dom';
import './App.css';
import type {InputEvent} from "./FlowUtil";

class MyComp extends React.Component {
  props: {
    name: string
  }

  static defaultProps = {
    name: "foo"
  }

  constructor(props) {
    super(props);
  }

  state = {
    val : 0,
    m: 1,
    items: [],
    filter: ''
  }

  inc: number;

  update = () => {
    this.setState({val : this.state.val + 1});
  }

  updateFilter = (e: InputEvent) => {
    this.setState({
      filter: e.target.value
    });
  }

  render() {
    console.log("render");
    let items = this.state.items;
    if (this.state.filter) {
      items = items.filter(item => item.name.toLowerCase().includes(this.state.filter.toLowerCase()));
    }
    return (
      <div>
        <button onClick={this.update}>{this.props.name}: {this.state.val * this.state.m}</button>
        {items.map(item => <Person key={item.name} person={item} />)}
        <hr />
        Filter: <input onChange={this.updateFilter} />
        <div>{this.state.filter}</div>
      </div>
    );
  }

  componentWillMount() {
    this.setState({m: 2});
    console.log("componentWillMount");
    this.inc = setInterval(this.update, 500);

    fetch('http://swapi.co/api/people/?format=json')
      .then( response => response.json() )
      .then(({results: items}) => {
        this.setState({items});
        console.log(items);
      });
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

const Person = (props: { person: {name: string}}) => <h4>{props.person.name}</h4>

class Wrapper extends React.Component {
  mount(){
    ReactDom.render(<MyComp name="Meee"/>, document.getElementById('a'))
  }

  unmount(){
    ReactDom.unmountComponentAtNode(document.getElementById('a'))
  }

  render() {
    return (
      <div>
        <button onClick={this.mount}>Mount</button>
        <button onClick={this.unmount}>UnMount</button>
        <div id="a"></div>
      </div>
    )
  }
}

export default Wrapper;
