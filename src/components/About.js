import React from 'react';

export default function About(props) {
    return (
        <><div classNameName="jumbotron" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
            <h1 className="display-4">TextUtils</h1>
            <p className="lead">Textutils gives u a way to analyze your text quickly . Either it be word count , character count or anything else .</p>
            <hr className="my-4" />
            <p>TextUtils is a free charcter count tool that provide instant character count and word count statistics for a given text .Textutils reports the number of word and charcters . Thus it is suitable for writing text with word/charcter limit.It suits to count charcter in facebook blogs , boks excel , documnent , pdf , essays , etc .</p>
            <p>Browser compatible : This word counter software works in any web browsers such as chrome , firefox, edge , safari , opera .  </p>
        </div>
        </>
    );

}
