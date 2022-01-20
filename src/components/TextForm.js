import React, { useState } from 'react'


export default function TextForm(props) {

    // handling events 

    //change to uppercase 
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    //convert to lower case 
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    // removes extra spaces
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ] + /);
        setText(newText.join(" "));
    }

    const handleCopyText = () => {
        let copyText = document.getElementById("textArea");

        //select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999);  //for mobile devices

        // copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
    }

    //clears the text area 
    const handleClear = () => {
        let newText = '';
        setText(newText);
    };

    const handleChange = (event) => {
        setText(event.target.value);        //on typing we set the updated value  | helps to type in text area
    };


    let [text, setText] = useState('');             // useState hook
    // setText is used to update the value of text variable

    return (
        <>
            <div className='container'>
                {/* setting the props */}
                <h1 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{props.heading}</h1>

                {/*onChange is used so that we can write in textarea . Helps in settting the state and updating it*/}

                <div className="form-group"><textarea className="form-control" value={text} onChange={handleChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'light' ? 'black' : 'white' }} id="textArea" rows="8" placeholder='text...'></textarea></div>

                <button className="btn btn-primary my-2 mx-1" onClick={handleUpClick}>Change to UpperCase</button>
                <button className="btn btn-primary my-1 mx-2" onClick={handleLoClick}>Change to LowerCase</button>
                <button className="btn btn-primary my-1 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary my-1 mx-2" onClick={handleCopyText}>Copy text</button>
                <button className="btn btn-primary my-1 mx-2" onClick={handleClear}>Clear</button>

            </div>
            <hr />
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h4>Text Summary</h4>
                <p>Words : {text.split(" ").length - 1} &nbsp; &nbsp; Characters  : {text.length}</p>
                <p>{0.008 * (text.split(" ").length - 1)} Minutes to Read</p>
                <h5>Preview</h5>
                <p>{text.length > 0 ? text : 'Enter something in textbox to preview'}</p>
            </div>
        </>
    )
}
