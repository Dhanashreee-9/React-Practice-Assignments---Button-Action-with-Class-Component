import React, {Component, useState} from "react";
import "./../styles/App.css";

class App extends Component {
	constructor(){
	super();
		this.state={
	        para: false, 
		}
	}
	 changePara=()=>{
		this.setState({ para :true});
	}		
	render(){
        return(
        <div>
    	   <button id ="click" onClick={this.changePara}>Click Me!!</button>
           { this.state.para ? <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p> : ""}
        </div>
	)
};
}

export default App;

