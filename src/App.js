import './App.css';
import { useState } from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.title = 'TextUtils - Light Mode';
      
      document.getElementById('switch-label').textContent = 'Enable Dark Mode';
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      document.title = 'TextUtils - Dark Mode';
      document.getElementById('flexSwitchCheckDefault').checked = true;
      document.getElementById('switch-label').textContent = 'Enable Light Mode';
    }
  }

  window.onload = function() {
    toggleMode();
}
  return (
    <>
    <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} />
    <div className="container my-3">
    <TextForm heading="Enter the Text to Analyze"/>
    </div>
    </>
  );
}

export default App;
