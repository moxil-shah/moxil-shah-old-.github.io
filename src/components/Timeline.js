import React from "react";

import "./all.css";

function Timeline() {
  return (
    <div className="home-2 dark">
      <h1>Timeline</h1>
      <br></br>
      <br></br>
      <h3>
        <strong style={{ color: "#ff7a1d" }}>University of Alberta</strong>
      </h3>

      <article
        style={{
          margin: "16px auto 20px",
          maxWidth: "680px",
          textAlign: "center",
        }}
      >
        <strong>
          BSc: Major in Computing Science, Minor in Business &#8226; 2020 - 2024
        </strong>
        <br />
        &#9702; Relvant Courses: Sofware Engineering, Databases, Algorithms &
        Data Structures <br /> &#9702; GPA: 3.96 / 4.0
      </article>

      <h3>
        <strong style={{ color: "#ff7a1d" }}>
          Northern Alberta Business Incubator
        </strong>
      </h3>

      <article
        style={{
          margin: "16px auto 20px",
          maxWidth: "680px",
          textAlign: "center",
        }}
      >
        <strong>
          Internship: Full Stack Developer &#8226; May 2022 - August 2022
        </strong>
        <br />
        &#9702; Employed machine learning algorithms to generate predictions
        based on historical data
        <br />
        &#9702; Created a dashboard to display business statistics and
        predictions for clients
        <br />
        &#9702; Managed a database of client data
      </article>
    </div>
  );
}
export default Timeline;
