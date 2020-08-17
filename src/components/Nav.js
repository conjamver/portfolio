import React from "react";

function Nav() {
  return (
    <nav>
      <div className="navContent">
        <h1>C.V.</h1>
        <ul>
          <a href="#projects"><li>Projects</li></a>
          <a href="#contact"><li>Contact</li></a>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
