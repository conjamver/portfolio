import React from "react";

function Project(props) {

  //Generate prop list
  var list = props.summaryPoints;

  function createList(myList){
    return(<li>{myList}</li>)
  }


  return (
    <div class="row">
      <div class="col-50">
        <img src='https://conjamver.github.io/portfolio/img/doshalley_1.jpg'/>
      </div>
      <div class="col-50">
        <h2>{props.title}</h2><span class="project-year"> {props.year}</span>


        <h3 class="techstack-cont">Techstack: <span class="techstack">{props.techstack}</span></h3>

        <p>{props.summary}</p>

        <ul>{list.map(createList)}</ul>

        <div class="project-buttons">
          <a target="_blank" href={props.webURL}><button>View site</button></a>
          <a target="_blank" href={props.sourceURL}><button>View code</button></a>
        </div>

      </div>
    </div>
  );
}

export default Project;
