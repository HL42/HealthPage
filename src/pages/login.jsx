import { useState } from 'react';
import { useRouter } from 'next/router';
import { Routes, Route } from 'react-router-dom';
import Home from './Admin'

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault()

    // replace the below hard coded values with OAuth
    if (username === "alex" && password === "password") {
      router.push('/admin');
    }
  }

  return (
    <div className="container">
      <h6 className="header">LOGIN</h6>
      <div className='sign-in-container'>
        <form className="content" onSubmit={handleSubmit}>
          <div className="first">
            <label>Username:</label>
            <br />
            <input
              className="textbox"
              type="text"
              placeholder="username123"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
          </div>
          <div className="second">
            <label>Password:</label>
            <br />
            <input
              className="textbox"
              type="password"
              placeholder="password123"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input className="login" type="submit" value="Sign In" onClick={handleSubmit}/>
        </form>
      </div>
    </div>
  );
}
