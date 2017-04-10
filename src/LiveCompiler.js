// @flow
import React from 'react';
import ReactDom from 'react-dom';
//import * as babel from 'babel-core';
import type {InputEvent} from "./FlowUtil";

class LiveCompiler extends React.Component{
  state = {
    err: "",
    input: "",
    output: ""
  }

  update = (e: InputEvent) => {
    let code = e.target.value;
    try{
      this.setState({
        output: window.Babel.transform(code, { presets: ['es2015', 'react']}).code,
        err: ''
      });
    }
    catch(err){
      this.setState({err: err.message});
    }
  }

  render(){
    return (
      <div>
        <header>{this.state.err}</header>
        <div className="container">
          <textarea
          onChange={this.update}
          defaultValue={this.state.input}/>
          <pre>
            {this.state.output}
          </pre>
        </div>
      </div>
    )
  }
}

export default LiveCompiler;
