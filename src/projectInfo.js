
const doshAlleyPoints = new Array(4);
doshAlleyPoints[0] = "Constructed a relational Database structure for storing savings accounts and then using PHP to print the results";
doshAlleyPoints[1] = "Search filters and pagination which tailors the saving account results from the database";
doshAlleyPoints[2] = "Security practices such as prepared SQL statements and input sanitation to project against SQL injection and Cross Site Scripting";
doshAlleyPoints[3] = "Mobile friendly design using bootstrap 4 and media queries";

const mellowPoints = new Array(3);
mellowPoints[0] = "Utilising Bootstrap 4 features such as grid components, carousel and modals to create a mobile first and user friendly design";
mellowPoints[1] = "Incorporating jQuery/Javascript to make interactive features such as animated accordions/collapsible and animated scrolling";
mellowPoints[2] = "Using project management strategies such as Trello Board and Scrum to ensure the team meets deadlines";


const projectInfo = [
  {
    id: 1,
    title: "Dosh Alley",
    techstack: "PHP, MySQL, Bootstrap 4, jQuery, Git, SASS",
    year: "2019",
    summary: "A web application which compares the amount of interest you will earn on a variety of savings accounts across Australia. It also features a dynamic blog built from scratch which gives tips on your finance.",
    summaryPoints: doshAlleyPoints,
    webURL: "https://classique-baguette-24267.herokuapp.com/",
    sourceURL:"https://github.com/conjamver/savers",
    imgURL: "https://conjamver.github.io/portfolio/img/doshalley_1.jpg"
  },

  {

  id: 2,
  title: "Mellow Me Out",
  techstack: "PHP, MySQL, Bootstrap 4, jQuery, Git",
  year: "2018",
  summary: "University capstone project conducted using the Scrum methodology. Lead front end developer for a beauty website showcasing the services of the Mellow Me Out brand.",
  summaryPoints: mellowPoints,
  webURL: "https://fathomless-oasis-69857.herokuapp.com/index.php",
  sourceURL:"https://github.com/conjamver/Mellow-Me-Out",
  imgURL: "https://conjamver.github.io/portfolio/img/mellow_me_out_1.jpg"
}

];

export default projectInfo;
