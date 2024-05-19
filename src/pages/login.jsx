import { useState } from 'react';
import { useRouter } from 'next/router';

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
    <div className="background">
      <div className="triangle"></div>
      <div className="modal">
        <div className='sign-in-container'>
          <div className="signIn-content signIn-header">Sign In</div>
          <form className="signIn-content" onSubmit={handleSubmit}>
            <div className="form-content">
              <label className='title'>Username:</label>
              <br />
              <input
                className="textbox form-content"
                type="text"
                placeholder="username123"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
            </div>
            <div className="form-content">
              <label className='title'>Password:</label>
              <br />
              <input
                className="textbox form-content"
                type="password"
                placeholder="password123"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input className="login form-content" type="submit" value="Sign In" onClick={handleSubmit}/>
          </form>
        </div>
      </div>
    </div>
    
  );
}
