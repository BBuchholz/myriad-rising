import React from 'react';

// WORKING FROM: 
// https://www.w3schools.com/react/react_forms.asp
//
// CURRENT SECTION:
// "Select"
//

class SandboxEntryForm extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            entryText: '',
            tagString: '', 
            xmlOutput: 'xml not yet generated',
        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }
    myResetHandler = (event) => {
        event.preventDefault();
        this.setState({ 
            entryText: '',
            tagString: '', 
            xmlOutput: 'xml not yet generated',
        });
        document.getElementById("tagStringInput").value = "";
        document.getElementById("entryTextArea").value = "";
        document.getElementById("xmlOutput").innerHTML = "";
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        let message = "Current state \n" + 
            JSON.stringify(this.state, null, 2);
        // alert(message);        
        //document.getElementById('xmlOutput').innerText = message;
        this.setState({xmlOutput: message});
    }
    render() {
        return(

            <div>
                <form 
                    id="myForm"
                    onSubmit={this.mySubmitHandler}
                >
                    <p>Tags: </p>
                    <input 
                        type="text"
                        name="tagString"
                        id="tagStringInput"
                        onChange={this.myChangeHandler}
                    />
                    <p>Entry Text: </p>
                    <textarea 
                        name="entryText"
                        id="entryTextArea"
                        onChange={this.myChangeHandler}
                    />
                    <input
                        type='submit'
                    /> 
                    <input 
                        type="button" 
                        name="resetButton" 
                        value="Reset" 
                        onClick={this.myResetHandler}
                    />                                   
                </form>
                <p>XML OUTPUT: </p>
                <pre id="xmlOutput">
                    {this.state.xmlOutput}
                </pre>
                <button>Copy Output To Clipboard</button>
            </div>
        );
    }
}

export default SandboxEntryForm;