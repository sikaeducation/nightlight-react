import {useState} from 'react';

function Switch() {
  const [status, setStatus] = useState(false);

  return (
    <button onClick={() => setStatus(!status)}>Toggle</button>
  );
}

export default Switch;
