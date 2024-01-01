import React, {useState} from 'react'

const TextForm = (props) => {
  const [text, setText] = useState('');
  const handleonChange= (e) => {
    // console.log("On Change");
    setText(e.target.value);
  }

  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
}

const handleLowClick = () => {
  let newText = text.toLowerCase();
  setText(newText);
  props.showAlert("Converted to LowerCase", "success");
}

const handleClearText = () => {
  let newText = '';
  setText(newText);
  props.showAlert("All text has been cleared", "success");
}

const handleCopy = () => {
  let selectedText = document.getElementById("myBox");
  selectedText.select();
  navigator.clipboard.writeText(selectedText.value);
  props.showAlert("Text has been copied", "success");
}

const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra spaces have been removed", "success");
}
  return (
    <>
    <div className="container my-3">
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} placeholder='Enter text here' onChange={handleonChange} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length === 0} className="btn btn-primary" onClick = {handleUpClick}>Convert to UpperCase</button>
<button disabled={text.length === 0} className="btn btn-primary mx-2" onClick = {handleLowClick}>Convert to LowerCase</button>
<button disabled={text.length === 0} className="btn btn-primary custom" onClick = {handleClearText}>Clear your Text</button>
<button disabled={text.length === 0} className="btn btn-primary custom mx-2" onClick = {handleCopy}>Copy to Clipboard</button>
<button disabled={text.length === 0} className="btn btn-primary custom" onClick = {handleExtraSpaces}>Remove Extra Spaces</button>
</div>
<div className="container my-3">
  <h2>Your Text Summary</h2>
  <p>{text.split(" ").length} words, {text.length} characters</p>
  <p>{0.008 * text.split(" ").length} Minutes to read</p>
  <h3>Preview</h3>
  <p>{text.length>0?text:'Enter something in the Textbox above to Preview here'}</p>
</div>
</>
  )
}

export default TextForm
