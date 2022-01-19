import React, { useState } from 'react'


export default function TextForm(props) {

    // handling events 
    const handleUpClick = () => {
        // console.log("Uppercase button clicked .")
        text = text.toUpperCase();
        setText(text);
    };

    const handleChange = (event) => {
        // console.log("Handle Change.")
        setText(event.target.value);        //on using this we now write on textarea 
    };


    //updating the value of the text
    let [text, setText] = useState(""); // hook  is made 
    // setText is used to update the value of text variable

    return (
        <div>

            {/* setting the props */}
            <h1>{props.heading}</h1>

            {/*onChange is used so that we can write in textarea . Helps in settting the state and updating it*/}
            <div className="form-group"><textarea className="form-control" value={text} onChange={handleChange} id="textArea" rows="8" placeholder='text...'></textarea></div>
            <button className="btn btn-primary my-1" onClick={handleUpClick}>Click me </button>

        </div>
    )
}
