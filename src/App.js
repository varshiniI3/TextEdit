
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textele from './components/textele';
import React,{useState} from 'react';
import Alert from './components/Alerts';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';



function App() {

  const [mode,setMode]= useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

 
  let toggle=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.querySelectorAll("#text").forEach(element => {
        element.style.color = "black";
      });
      showAlert("Dark mode has been enabled", "success");
    }else{
      setMode('dark');
      document.body.style.backgroundColor="black";
      document.querySelectorAll("#text").forEach(element => {
        element.style.color = "white";
      });
      showAlert("light mode has been enabled", "success");
  }
}

// return (
//   // <>
//   // <Navbar title="textEdit-app" mode={mode} toggle={toggle}/>
//   // <Alert alert= {alert}/>
//   // {/* <Navbar/> */}
//   // <div className="container my-5">
  
//   //         <Routes basename="/app">
//   //           <Route path="/about" element={<About />}/>
//   //           <Route path="/" element={<Textele title="Enter Text Here"  mode={mode} showAlert={showAlert} />}/>
//   //         </Routes>
  
//   // </div>
//   // </>

//   );

return (
  <Router>
    <div>
      <Navbar title="TextEdit" mode={mode} toggle={toggle} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<Textele showAlert={showAlert} title="Enter Your Text" mode={mode} toggle={toggle}/>} />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </div>
  </Router>
);

}

export default App;
