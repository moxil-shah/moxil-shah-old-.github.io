import React from "react";
import "./all.css";

function HeroPage() {
  return (
    <div className="home-1">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <h1>Moxil Shah</h1>
      <h4 style={{ color: "#ff7a1d" }}>Venture Captialist</h4>
      <article>
        Comp sci undergraduate with a passion for software eng & fintech
      </article>
      <div className="icon-bar">
        <a href="https://github.com/moxil-shah" target="_blank">
          <i className="fa fa-github"></i>
        </a>
        <a>
          <i className="fa fa-file-text"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/moxil-shah-6031721b0/"
          target="_blank"
        >
          <i className="fa fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}
export default HeroPage;
