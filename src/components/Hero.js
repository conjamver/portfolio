import React from "react";

function Hero() {
  return (
      <div id="heroContainer">
        <div class="hero-content">
          <h1>Connor Vernon</h1>
          <h2>Full stack &#9826; Web designer</h2>
          <div class="hero-buttons">
            <a href="https://conjamver.github.io/portfolio/test.rtf" download> <button><i class="far fa-file-pdf"></i> Resume</button></a>
            <a href="https://github.com/conjamver" target="_blank"><button><i class="fab fa-github"></i> GitHub</button></a>
          </div>
        </div>
      </div>

  );
}

export default Hero;
