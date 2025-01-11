import React, { useState } from 'react'

export default function TextForm({ heading, mode, showAlert }) {
    const [text, setText] = useState('');
    const [word, setWord] = useState(0);
    const handleText = (event) => {
        setText(event.target.value)
        let textCount = event.target.value.split(' ');
        let word = 0;
        textCount.forEach(count => {
            if (count) {
                word++;
                setWord(word)
            } else {
                setWord(word)
            }
        })
    }

    const handleUpClick = () => {
        setText(text.toUpperCase());
        showAlert("Uppercase successfully", "primary")
    }
    const handleLwClick = () => {
        setText(text.toLowerCase());
    }
    const handleClearClick = (event) => {
        setText('');
        handleText(event)
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
    }
    const handleExtraSpaceClick = () => {
        setText(text.replace(/\s+/g, ' '));
    }

    return (
        <>
            <div className='container'>
                <h1 className="text-black">{heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleText} placeholder='Enter text here' ></textarea>
                </div>
                <button className={`btn btn-primary mx-2 bg-${mode}`} onClick={handleUpClick}>Convert to Uppercase</button>
                <button className={`btn btn-primary mx-2 bg-${mode}`} onClick={handleLwClick}>Convert to Lowercase</button>
                <button className={`btn btn-primary mx-2 bg-${mode}`} onClick={handleClearClick}>Clear Text</button>
                <button className={`btn btn-primary mx-2 bg-${mode}`} onClick={handleCopyClick}>Copy Text</button>
                <button className={`btn btn-primary mx-2 bg-${mode}`} onClick={handleExtraSpaceClick}>Extra Space</button>
            </div>
            <div className='container my-3'>
                <h2 className="text-white">Your text summary</h2>
                <p className="text-white"> {word} words and {text.length} characters</p>
                <p className="text-white">{0.008 * text.split(' ').length} Minutes read</p>
                <h2 className="text-white">Preview</h2>
                <p className="text-white">{text.toLowerCase()}</p>
            </div>
        </>
    )
}
