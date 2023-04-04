import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
  };

  return (
    <center>
    <form onSubmit={handleSubmit}>
      <h1>LOGIN FORM</h1>
      <label>
        Username:
      </label>
      <input type="text" value={username} onChange={handleUsernameChange} />
      <br />
      <label>
        Password:
      </label>
      <input type="password" value={password} onChange={handlePasswordChange} />
      <br />
      <button type="submit">Log In</button>
      <button type="submit">Sign Up</button>
    </form>
    </center>
    
  );
}

export default LoginForm;