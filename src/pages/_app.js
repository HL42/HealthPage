import '@/pages/_app.css';

// document.body.style.backgroundColor = "#E6E6E6";

export default function MyApp() {
  return(
  <div className="container">
    <h6 className="header">LOGIN</h6>
    <div className='sign=in-container'>
      <form className="content">
        <div className="first">
          <label>Username:</label>
          <br />
          <input className="textbox" type="text" placeholder="username123" />
          <br />
        </div>
        <div className="second">
          <label>Password:</label>
          <br />
          <input className="textbox" type="text" placeholder="password123" />
        </div>
        <input className="login" type="submit" value="Sign In" />
      </form>
    </div>
</div>);
}
