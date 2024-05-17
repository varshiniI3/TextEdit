import React,{useState} from 'react';

export default function Textele(props) {

    const [text,setText]= useState('')
    const onclick1=()=>{
        let newText=text.toUpperCase();
        props.showAlert("Converted to uppercase!", "success");
        setText(newText);
    }
    const onclick2=()=>{
      let newText=text.toLowerCase();
      props.showAlert("Converted to lowercase!", "success");
      setText(newText);
    }
    const onclick3=()=>{
     let  newText=" ";
      setText(newText);
      props.showAlert("Text Cleared!", "success");
    }
    const onclick4=()=>{
       var Text=document.getElementById("textbox");
       Text.select();
       navigator.clipboard.writeText(Text.value);
       props.showAlert("Copied to Clipboard!", "success");
    }
    const onclick5=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed!", "success");
    }
    const setTextfun=(event)=>{
      setText(event.target.value);
    }

  return (
    <>
    <h1 id="text" style={ {color: props.mode==="dark"?"white":"black"}}>{props.title}</h1>
    <div className="mb-3 my-4">
    <textarea className="form-control" style={{backgroundColor: props.mode === "dark" ? "white" : "#11310c" ,color :props.mode === "dark" ? "black" : "white"}} id="textbox" onChange={setTextfun} value={text} rows="8"></textarea>
    <button className={`btn btn-outline-${props.mode==="dark" ?"light":"dark"} my-3 mx-2`} disabled={text.length===0} onClick={onclick1}>to-uppercase</button>
    <button className={`btn btn-outline-${props.mode==="dark" ?"light":"dark"} my-3 mx-2`} disabled={text.length===0} onClick={onclick2}>to-lowercase</button>
    <button className={`btn btn-outline-${props.mode==="dark" ?"light":"dark"} my-3 mx-2`} disabled={text.length===0} onClick={onclick4}>copy text</button><br/>
    <button className={`btn btn-outline-${props.mode==="dark" ?"light":"dark"} my-3 mx-2`} disabled={text.length===0} onClick={onclick5}>remove extra-spaces</button>
    <button className={`btn btn-outline-${props.mode==="dark" ?"light":"dark"} my-3 mx-2`} disabled={text.length===0} onClick={onclick3}>clear</button>
    </div>
    <div className="mb-3 my-4" style={ {color: props.mode==="dark"?"white":"black"}} >
      {/* <hr className={`border border-${props.mode==="dark" ?"light":"dark"} border-2`}></hr> */}
      <center><strong><p id="text">{text.length>0?"Gratitude for being part of our community; your presence enriches our site!":"Type something to enable features!"}</p></strong></center>
      <h5 id="text">text info</h5>
      <p id="text">number of words : {text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} and number of charcters : {text.replace(/\s/g, '').length}</p>
      <p id="text">{0.008 *text.split(/\s+/).length} read time</p>
      {/* <hr className={`border border-${props.mode==="dark" ?"light":"dark"} border-2`}></hr> */}
      <h5 id="text">preview</h5>
      <p id="text">{text.length>0?text:"No Text Entered To Preview!"}</p>
    </div>
    </>
  )
}
