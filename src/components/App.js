import React from 'react';
import Nav from './Nav';
import Hero from './Hero';
import Project from './Project';
import projectInfo from "../projectInfo";
import Contact from './Contact';
import Footer from './Footer';

//Map function for projcts
function createProject(project){
  return(
    <Project
    title={project.title}
    techstack={project.techstack}
    summary={project.summary}
    imgURL={project.imgURL}
    summaryPoints={project.summaryPoints}
    webURL={project.webURL}
    sourceURL={project.sourceURL}
    year={project.year}
    />
  );
}


function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <div id="projects">
        <div class="container">
          <h1>PROJECTS</h1>
          {projectInfo.map(createProject)}
        </div>
      </div>

      <div id="contact">
        <div class="container">
          <h1>CONTACT</h1>
          <Contact/>
        </div>
      </div>

      <Footer/>

    </div>
  );
}

export default App;
