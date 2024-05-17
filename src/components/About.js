
import React from 'react';
import { Link } from 'react-router-dom';

export default function About(props) {
    let aboutmode = {
        color: props.mode === 'dark' ? 'black' : 'white',
        backgroundColor: props.mode === 'dark' ? 'white' : '#2d6a4f',
        borderColor: props.mode === 'dark' ? '#fff' : 'black', // Border color based on mode

    };

    return (
        <>
            <div className="card text-center" style={aboutmode}>
                <div className="card-header ">
                    All About Us
                </div>
                <div className="card-body">
                    <h5 className="card-title">About</h5>
                    <p className="card-text">Welcome to TextEdit App – your ultimate tool for text manipulation and analysis!<br />
                    Features: Word and Character Count,Remove Extra Spaces,Text Analysis,Dark Mode<br />
                    At TextEdit App, we're committed to providing a seamless text editing experience. Our team is dedicated to continuous improvement to meet your evolving needs.
                    Join thousands of users who trust TextEdit App for their text editing tasks. Experience the convenience and efficiency of TextEdit App today!</p>
                    <Link to="/" className={`btn btn-${props.mode === 'dark' ?'dark':'light'}`}>type something</Link>
                </div>
            </div>
        </>
    );
}




























// import React ,{useState}from 'react'


// export default function About(props) {
//     // const [mode,setMode]=useState({
//     //     color: "black",
//     //     backgroundColor : "white"
//     // });
//     let mode = {
//       color: props.mode ==='dark'?'black':'white',
//       backgroundColor: props.mode ==='dark'?'white':'black',
//   }
//     // const [btn,setBtn]=useState("Mode");

//     // const setModeHere=()=>{
//     //     if(mode.color==="black"){
//     //         setMode({
//     //             color: "white",
//     //             backgroundColor: "black"
//     //         });
//     //       setBtn("light mode");
       
//     //     }
//     //     else{
//     //         setMode({
//     //             color: "black",
//     //             backgroundColor: "white"
//     //         });
//     //         setBtn("dark mode");
        
//     //     }
//     // };

//   return (
//     <>
// <div className="card text-center" style={mode}>
//   <div className="card-header">
//     All About Us 
//   </div>
//   <div className="card-body">
//     <h5 className="card-title">About</h5>
//     <p className="card-text">Welcome to TextEdit App – your ultimate tool for text manipulation and analysis!<br/>
// Features: Word and Character Count,Remove Extra Spaces,Text Analysis,Dark Mode<br/>
// At TextEdit App, we're committed to providing a seamless text editing experience. Our team is dedicated to continuous improvement to meet your evolving needs.
// Join thousands of users who trust TextEdit App for their text editing tasks. Experience the convenience and efficiency of TextEdit App today!</p>
//     <a href="/" className="btn btn-dark">type something</a>
//   </div>
//   {/* <div className="card-footer text-body-secondary">
//     currently
//   </div> */}
// </div>

// {/* <button onClick={setModeHere}>{btn}</button> */}
// </>
//   )
// }


