import React from "react";

var currentYear = new Date().getFullYear();

function Footer() {
  return (
      <footer>
        <div className="footer-content">
          <div className="footer-socialRow">

            <div className="footer-socialCol">
              <a href="https://github.com/conjamver" target="_blank"><i class="fab fa-github"></i></a>
            </div>

            <div className="footer-socialCol">
              <a href="https://www.linkedin.com/in/cjvernon/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
            </div>

          </div>

          <p>&copy; Copyright Connor Vernon {currentYear}</p>
          <p className="footer-info">
          This site was built with the React framework. Icons served all over the website by <a href="https://fontawesome.com" target="_blank">Font Awesome</a>.
          Portfolio hosted using GitHub pages. Portfolio source code can be found here: <a href="https://github.com/conjamver/portfolio" target="_blank">https://github.com/conjamver/portfolio</a>.
          </p>
        </div>

      </footer>

  );
}

export default Footer;
