import React from "react";
import "./all.css";

function NavBar() {
  return (
    <header>
      <div className="logo">
        <a href="/">Portfolio</a>
      </div>
      <nav>
        <div>
          <ul>
            <li>
              <a href="mailto: moxil@ualberta.ca">moxil@ualberta.ca</a>
            </li>
            {/* <li>
              <a>Timeline</a>
            </li> */}
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default NavBar;
