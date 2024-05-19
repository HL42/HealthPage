import ListGroup from "./Hospital";
import "./Files.css";
import lebron from "./lebronpfp.jpg";
import images from "./images.png";
import { useState } from "react";

function Home() {
  const squares = Array.from({ length: 6 }, (_, index) => (
    <div key={index} className="square">
      <img src={images} className="square" />
    </div>
  ));

  const clients = [
    {
      name: "Joe Schmoe",
      img: images,
    },
    {
      name: "Claire Smith",
      img: images,
    },
    {
      name: "Alex Attah",
      img: images,
    },
    {
      name: "Ryan Park",
      img: images,
    },
    {
      name: "Madeleine  Brady",
      img: images,
    },
    {
      name: "Julia Natalia",
      img: images,
    },
  ];
  const [person, setperson] = useState(clients);
  return (
    <div className="content">
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

export default Home;
