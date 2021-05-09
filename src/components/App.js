import React, {Component, useState} from "react";
import "./../styles/App.css";

class App extends Component {
	render(){
	 const [showpara, showParagraph] = useState(false);

    const onClicking = () => {
        showParagraph(true);
    };
    return (
        <div id="main">
            {/* Do not remove this main div!! */}
            <button id="click" onClick={() => onClicking()}>
                {"Click me"}
            </button>
            {showpara ? <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p> : ""}
        </div>
    );}
   
};


export default App;

