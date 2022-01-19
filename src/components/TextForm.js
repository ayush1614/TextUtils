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

    const handleChange = (event) => {
        setText(event.target.value);        //on typing we set the updated value  | helps to type in text area
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
            <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>Change to UpperCase</button>
            <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>Change to LowerCase</button>

        </div>
    )
}
