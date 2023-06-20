import React, { useState } from 'react';

const Terminal = () => {
  const [command, setCommand] = useState('');
  const [response, setResponse] = useState('');

  const handleCommandChange = (event) => {
    setCommand(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('http://127.0.0.1:5000/execute-command', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ command }),
      });
      
      const data = await response.json();
      console.log(data)
      setResponse(data.response);
    } catch (error) {
      console.error(error);
    }
    
    setCommand('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={command} onChange={handleCommandChange} />
        <button type="submit">Submit</button>
      </form>
      <pre>{response}</pre>
    </div>
  );
};

export default Terminal;
