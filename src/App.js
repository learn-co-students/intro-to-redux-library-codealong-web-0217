import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(){
		super()

		this.handleOnClick = this.handleOnClick.bind(this)
	}
	handleOnClick(){
		this.props.store.dispatch({
			type: 'INCREASE_COUNT'
		})
	}
  render() {
  	debugger
    return (
      <div className="App">
      	<button onClick={this.handleOnClick}>
      	click 
      	</button>
      	<p>{this.props.store.getState().items.length}</p>
      </div>
    );
  }
};

export default App;
