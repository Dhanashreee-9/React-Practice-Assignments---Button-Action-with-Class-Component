
import {Component} from "react";
import "./../styles/App.css";

class App extends Component {
	constructor(){
	super();
		this.state={
	        para: "",
		}
	}
	 changePara=()=>{
		this.setState({ para :"Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"})
	}		
	render(){
        return(
    
	<div>
    	<button id ="click" onClick={this.changePara}>Click Me!!</button>
      { this.changePara ? <p id="para">{this.state.para}</p> : ""}
        </div>
	)
		
};
}

export default App;

