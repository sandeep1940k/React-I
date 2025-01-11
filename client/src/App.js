import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { Alert } from './components/Alert';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('blue');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = (theme) => {
    // if (mode === 'light') {
    //   setMode('dark');
    //   document.body.style.backgroundColor = 'grey';
    //   showAlert("Dark mode has been enabled", "success")
    // } else {
    //   setMode('light');
    //   document.body.style.backgroundColor = 'white';
    //   showAlert("Light mode has been enabled", "success")
    // }
    setMode(theme);
    document.body.style.backgroundColor = theme;
    // document.body.style.opacity = 0.5;
    document.body.style.background = `linear-gradient(to top, ${theme}, white)`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "100% 100%"; // Ensure it covers the entire screen


    // showAlert(theme + "mode has been enabled", "success")
  }
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />}></Route>
          <Route exact path="/about" element={<About />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
