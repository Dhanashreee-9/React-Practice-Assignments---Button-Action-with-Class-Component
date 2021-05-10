
import {Component} from "react";
import "./../styles/App.css";

class App extends Component {
	constructor(){
	super();
		this.state={
	        para: false, // initially ye false rahega to p tag show nhi hoga
		}
	}
	 changePara=()=>{
		this.setState({ para :true}); // click krne ke baad para true set ho gaya so p this.state.para true hoga and p tag show krega
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

