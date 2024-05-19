

const Home = (props) => {
  const {username, password} = props;

  console.log(username, password);
  return (
    <>
      <ul>
        <li>
          <a href="/Home">Home</a>
        </li>
        <li>
          <a href="/files">Files</a>
        </li>
        <li>
          <a href="/admin" className="sign">
            Sign Out
          </a>
        </li>
        <li>
          <img src="/lebronpfp.jpg" width="34" height="34" className="pfp" />
        </li>
      </ul>
      <div className="admin-content-container">
        <h3 className="intro">DESCRIPTION</h3>
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
      </div>
    </>
  );
}

export default Home;
