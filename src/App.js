import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message) => {
    setAlert(message);

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const changeMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert(' Dark mode enabled ');
    }

    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(' Light mode enabled ');
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} changeMode={changeMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <Switch>    {/* used for routing*/}
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter text here" mode={mode} />
          </Route>
        </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
