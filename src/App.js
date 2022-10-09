import './App.css';
import Switch from './Switch';
import Light from './Light';
import {useState} from 'react';

function App() {
  const [status, setStatus] = useState(false);
  const toggle = () => setStatus(!status);

  return (
    <div className="App">
      <Switch toggle={toggle} />
      <Light status={status} />
    </div>
  );
}

export default App;
