import React, {useState} from 'react'

export default function TextBox(props) {

    const[text, setText] = useState('');

    //FUNCTION TO WRITE TEXT
    const handleText = (event) =>{
        //console.log("handleText is working");
        setText(event.target.value)
    }

    //FUNCTION FOR UPPER CASE
    const handleUpCase = ()=>{
       //console.log("handleUpCase is working");
       let newText = text.toUpperCase();
       setText(newText);
       props.showAlert("success", "Converted to Upper Case");
    }

    //FUNCTION FOR LOWER CASE
    const handleLoCase = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("success", "Converted to Lower Case");
    }

    //FUNCTION TO COPY TEXT
    const handleCopy = ()=>{
        let newText = document.getElementById('myBox')
        //newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("success", "Copied to Clipboard");
    }

    //FUNCTION TO REMOVE EXTRA SPACES
    const handleRmv = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("success", "Extra spaces removed");
    }

    //CLEAR TEXT
    const handleClr = ()=>{
        let newText = "";
        setText(newText)
        props.showAlert("success", "Text cleared");
    }

    return (
        <>
        <div className='container my-4'>
            <div className="mb-3">
                <h1 style={{color: props.mode==='light'? 'black':'white'}}>{props.heading}</h1>
                <textarea style={{backgroundColor: props.mode==='light'?'white':'#a1a1a1'}} className="form-control" placeholder='Enter text here...' value={text} onChange={handleText} id="myBox" rows="8"></textarea>
            </div>
            <button type="button" className='btn btn-primary btn-sm' onClick={handleUpCase} disabled={text.length===0}>Convert to Upper Case</button>
            <button type="button" className='btn btn-primary btn-sm mx-1' onClick={handleLoCase} disabled={text.length===0}>Convert to Lower Case</button>
            <button type="button" className='btn btn-primary btn-sm' onClick={handleCopy} disabled={text.length===0}>Copy Text to Clipboard</button>
            <button type="button" className='btn btn-primary btn-sm mx-1' onClick={handleRmv} disabled={text.length===0}>Remove Extra Spaces</button>
            <button type="button" className='btn btn-primary btn-sm' onClick={handleClr} disabled={text.length===0}>Clear Text</button>
        </div>

        <div className='container my-3'style={{color: props.mode==='light'?'black':'white'}}>
            <h1>{props.summary}</h1>
            <p className='my-2'>{props.letter} {text.length}</p>
            <p className='my-2'>{props.word} {text.split(" ").filter((words)=>{return words.length!==0;}).length}</p>
            <p className='my-2'>{props.time} {0.008 * text.length} seconds</p>
        </div>

        <div className='container my-3' style={{color: props.mode==='light'?'black':'white'}}>
            <h1>{props.preview}</h1>
            <p>{text.length>0? text:"Enter somthing in the box above to analyze"}</p>
        </div>

        </>
    )
}
