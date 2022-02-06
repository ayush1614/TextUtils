import React, { useState } from 'react'

export default function TextForm(props) {

    //change to uppercase 
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase' ,'success') ;
    };

    //convert to lower case 
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase') ; 
    };

    // removes extra spaces
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ] + /);
        setText(newText.join(" ")); 
        props.showAlert('Extra Spaces Removed')
    }

    const CopyText = () => {
        let copyText = document.getElementById("textArea");

        // copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
        document.getSelection().removeAllRanges() ;
        props.showAlert('Copied to Clipboard')
    }

    //clears the text area 
    const handleClear = () => {
        let newText = '';
        setText(newText);
        props.showAlert('Cleared')
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
                <h1 className='mb-4' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{props.heading}</h1>

                {/*onChange is used so that we can write in textarea . Helps in settting the state and updating it*/}

                <div className="form-group"><textarea className="form-control" value={text} onChange={handleChange} style={{ backgroundColor: props.mode === 'dark' ? '#3f5c74' : 'white', color: props.mode === 'light' ? 'black' : 'white' }} id="textArea" rows="8"></textarea></div>

                <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleUpClick}>Change to UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary my-1 mx-2" onClick={handleLoClick}>Change to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary my-1 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-primary my-1 mx-2" onClick={CopyText}>Copy text</button>
                <button disabled={text.length===0} className="btn btn-primary my-1 mx-2" onClick={handleClear}>Clear</button>

            </div>
            <hr />
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h4>Text Summary</h4>
                <p>Words : {text.split(/\s+/).filter((element)=>{return element.length>0}).length} &nbsp; &nbsp; Characters  : {text.length}</p>
                <p>{0.008 * (text.split("").filter((element)=>{return element!==' '}).length)} Minutes to Read</p>
                <h5>Preview</h5>
                <p>{text.length > 0 ? text : 'Nothing to preview'}</p>
            </div>
        </>
    )
}
