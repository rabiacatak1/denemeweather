import {useState} from "react";

export default function FormDeneme(){
    const [inputNameValue,setInputNameValue]=useState('');
    const [inputLastNameValue,setInputLastNameValue]=useState('');
    const [inputMessageValue,setInputMessageValue]=useState('');
    function handleInputFirstNameChange(e) {
        setInputNameValue(e.target.value)

    }

    function handleInputLastNameChange(e) {
        setInputLastNameValue(e.target.value)

    }

    function handleMessageChange(e) {
        setInputMessageValue(e.target.value)

        }

    function sendAlertMessage(){
        alert('Hello from the other siiiidddeeeeeee')
    }


    function resetButton() {
        setInputNameValue(' ')
        setInputLastNameValue(' ')

    }
    return(

        <form onSubmit={e => e.preventDefault()}>
            <input
                onChange={(e) => handleInputFirstNameChange(e)}
                value={inputNameValue}
                placeholder="First Name"
            >
            </input>
            <br/>
            <br/>
            <input
                onChange={(e) => handleInputLastNameChange(e)}
                value={inputLastNameValue}
                placeholder="Last Name"
            >
            </input>
            <br/>
            <br/>

            <h1>{'Hello' + '' + inputNameValue + ' ' + inputLastNameValue}</h1>

            <button
                onClick={resetButton}
            >Reset</button>

            <br/>
            <br/>

            <input
                onChange={(e) => handleMessageChange(e)}
                value={inputMessageValue}
                placeholder="Message"
            >
            </input>

            <br/>
            <br/>

            <button
                onClick={sendAlertMessage}
            >
                Send
            </button>



        </form>
    )
}