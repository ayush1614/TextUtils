import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');

  const changeMode = () => {
    if (mode === 'light') {
      setMode('dark') ;
      document.body.style.backgroundColor = '#042743' ;
    }

    else {
      setMode('light');
      document.body.style.backgroundColor = 'white' ;
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} changeMode={changeMode } />
      <div className="container my-3">
        <TextForm heading="Enter text here" mode={mode}/>
      </div>
    </>
  );
}

export default App;
