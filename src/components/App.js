import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
	
    constructor(props) {
		super(props);
	    this.state = {
		    text:""
	    }
      handleButton = ()=>{
	      this.setState({
		   text : "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"   
	      })
      }
	};

    render() {
    	return(
    		<div id="main">
			<p id = "para">{ this.state.text }</p>
		<button id = "click" onClick = {this.handleButton}>Submit</button>
    		</div>
    	);
    }
}


export default App;

