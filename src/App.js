// import logo from './logo.svg';
import './App.css';
import AboutUs from './components/AboutUs';
import Alert from './components/Alert';
import HomePg from './components/HomePg';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const[mode, setMode]= useState('light');
  const[label, setLable] = useState('Dark Mode');
  const[alert, setAlert] = useState(null);

  const showAlert = (type, message) =>{
    setAlert({
      type: type,
      message: message,
    })

    setTimeout(() => {
      showAlert(null);
    }, 2500);
  }

  // setInterval(() => {
  //   document.title= 'Text Converter'
  // }, 1500);

  // setInterval(() => {
  //   document.title= '(2) Messages'
  // }, 2500);

  const changeMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      setLable('Light Mode');
      document.body.style.backgroundColor= 'black';
      showAlert('success', 'Dark mode is enabled')
      // document.title= 'Text Converter - Dark'
    }

    else{
      setMode('light');
      setLable('Dark Mode');
      document.body.style.backgroundColor='white';
      showAlert('success', 'Light mode is enabled')
      // document.title= 'Text Converter - Light'
    }
  }

  return (
    <>
    <Router>
      <Navbar title={"Text Converter"} about={"About Us"} myMode={mode} changeMode={changeMode} label={label} />
      <Alert alert={alert} />
        {/* <div className="container my-3"> */}
          <Routes>
            <Route path="/" element={<HomePg mode={mode} heading="WELCOME TO TEXT CONVERTER" what={"What is Text Converter"} use={"Why to use Text Converter"}/>} />
            <Route path="/home" element={<TextBox showAlert={showAlert} heading={"ENTER YOUR TEXT TO ANALYZE:"} mode={mode} summary={"SUMMARY"} preview={"PREVIEW YOUR TEXT"} word={"Total Words: "} letter={"Total Letters: "} time={"Total Minutes: "} />} />
            <Route path="/about" element={<AboutUs about={"ABOUT US"} mode={mode} />} />
          </Routes>
        {/* </div> */}
      </Router>

    </>
  );
}

export default App;
