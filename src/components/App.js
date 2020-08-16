import React from 'react';
import Nav from './Nav';
import Hero from './Hero';
import Project from './Project';
import projectInfo from "../projectInfo";
import Footer from './Footer';

//Map function for projcts
function createProject(project){
  return(
    <Project
    title={project.title}
    techstack={project.techstack}
    summary={project.summary}
    imgURL={project.imgURL}
    />
  );
}


function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <div id="projects" class="container">
        <h1>PROJECTS</h1>
        {projectInfo.map(createProject)}
      </div>

      <Footer/>

    </div>
  );
}

export default App;
