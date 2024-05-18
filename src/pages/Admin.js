import ListGroup from "./Hospital";
import "./Home.css";
import lebron from "./lebronpfp.jpg";

function Home() {
  return (
    <>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#news">Files</a>
        </li>
        <li>
          <a href="#contact" className="sign">
            Sign Out
          </a>
        </li>
        <li>
          <img src={lebron} width="34" height="34" className="pfp" />
        </li>
      </ul>
      <h3 className="intro">DESCRIPTION</h3>
      <center>
        <p className="summary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </center>
    </>
  );
}

export default Home;
