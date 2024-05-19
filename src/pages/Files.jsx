import { useState } from "react";

const Files = () => {
  const squares = Array.from({ length: 6 }, (_, index) => (
    <div key={index} className="square">
      <img src="/siloette.jpg" className="square" />
    </div>
  ));

  const clients = [
    {
      name: "Joe Schmoe",
      img: "/siloette.jpg",
    },
    {
      name: "Claire Smith",
      img: "/siloette.jpg",
    },
    {
      name: "Alex Attah",
      img: "/siloette.jpg",
    },
    {
      name: "Ryan Park",
      img: "/siloette.jpg",
    },
    {
      name: "Madeleine  Brady",
      img: "/siloette.jpg",
    },
    {
      name: "Julia Natalia",
      img: "/siloette.jpg",
    },
  ];
  const [person, setperson] = useState(clients);
  return (
    <div className="content">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/files">Files</a>
        </li>
        <li>
          <a href="admin" className="sign">
            Sign Out
          </a>
        </li>
        <li>
          <img src="/lebronpfp.jpg" width="34" height="34" className="pfp" />
        </li>
      </ul>
      <h3 className="intro">FILES</h3>
      <center>
        <p>
          <div className="grid-container">
            {
              person.map((persons) => {
                return (
                  <div className={"App-item"}>
                    <div>
                      <img
                        src={persons.img}
                        alt={persons.name}
                        className="square"
                      />
                      <div>
                        <h3> {persons.name}</h3>{" "}
                      </div>
                    </div>
                  </div>
                );
              })
              //squares;
            }
          </div>
        </p>
      </center>
      <button className="Add">+</button>
    </div>
  );
}

export default Files;
