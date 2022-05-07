import React from "react";
import "./all.css";
import project1 from "./project1.png";
import project2 from "./project2.png";

function Projects() {
  return (
    <div className="home-3">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <h1>Projects</h1>
      <br></br>
      <br></br>

      <h3>
        <strong style={{ color: "#ff7a1d" }}>QR Code Game</strong>
      </h3>

      <div className="container">
        <a
          href="https://github.com/CMPUT301W22T23/QR-Code-Game"
          target="_blank"
        >
          <img
            src={project1}
            alt="Avatar"
            className="image"
            style={{ width: "100%" }}
          />
          <div className="middle">
            <div className="text">
              A Pokémon GO spin off Android app where users can scan QR codes
              and obtain points on a global leaderboard based on the QR code
              hash
              <br />
              <hr size="7" width="100%" color="#ff7a1d" />
              Java, Firestore, Google Maps API, MVC, SCRUM, OOP
              <br />
              <br />
              <i style={{ color: "#ff7a1d" }} className="fa fa-link"></i>
            </div>
          </div>
        </a>
      </div>

      <br />

      <h3>
        <strong style={{ color: "#ff7a1d" }}>Cash Flow Management App</strong>
      </h3>

      <div className="container">
        <a
          href="https://github.com/PalaashKolhe/Cash-Flow-Management-App"
          target="_blank"
        >
          <img
            src={project2}
            alt="Avatar"
            className="image"
            style={{ width: "100%" }}
          />
          <div className="middle">
            <div className="text">
              Android app that uses Firebase's OCR model to scan reciepts and
              summarize spending habits into a pie chart
              <br />
              <hr size="7" width="100%" color="#ff7a1d" />
              Java, Firebase, Machine Learning (OCR)
              <br />
              <br />
              <i style={{ color: "#ff7a1d" }} className="fa fa-link"></i>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Projects;
