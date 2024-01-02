import './App.css';
import { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.title = 'TextUtils - Light Mode';
      showAlert("Light Mode has been enabled", "success");
      document.getElementById('switch-label').textContent = 'Enable Dark Mode';
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      document.title = 'TextUtils - Dark Mode';
      document.getElementById('flexSwitchCheckDefault').checked = true;
      showAlert("Dark Mode has been enabled", "success");
      document.getElementById('switch-label').textContent = 'Enable Light Mode';
    }
  }

  window.onload = function() {
    toggleMode();
}
  return (
    <>
    <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
      <Route exact path="/" element = {<TextForm heading="Enter the Text to Analyze" mode={mode} showAlert={showAlert}/>}/>
      <Route exact path="/about" element = {<About mode={mode}/>}/>    
    </Routes>
    </div>
    </>
  );
}

export default App;
