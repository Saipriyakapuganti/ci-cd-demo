import { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const handleClick = async () => {
    try {
      const res = await fetch('http://backend:5000/api/message');
      const data = await res.json();
      setMessage(data.message);
    } catch (err) {
      setMessage('❌ Could not connect to Node.js backend.');
    }
  };

  return (
    <div className="container">
      <div className="overlay">
        <h1>Just interact with Node.js by clicking below</h1>
        <button onClick={handleClick}>Click to Connect</button>
        {message && <p className="response">{message}</p>}
      </div>
    </div>
  );
}

export default App;
