import Generator from "./Generator.js"

class Footer extends Generator
{
	constructor()
	{
		super();
		this.ID = "footer";
		this.content = "<div id='credits'>" +
							"<div id='socialMedia'>" +
							"</div>" +
							"<div>" +
							"<h2> Professional </h2>" +
							"<a href='AboutMe.html'> <p> About Me </p> </a>" +
							"<a href='AboutMe.html'> <p> About Me </p> </a>" +
							"<a href='AboutMe.html'> <p> About Me </p> </a>" +
							"</div>" +
							"<div>" +
							"<h2> Professional </h2>" +
							"<a href='AboutMe.html'> <p> About Me </p> </a>" +
							"<a href='AboutMe.html'> <p> About Me </p> </a>" +
							"<a href='AboutMe.html'> <p> About Me </p> </a>" +
							"</div>" +
							"<div>" +
							"<h2> Professional </h2>" +
							"<a href='AboutMe.html'> <p> About Me </p> </a>" +
							"<a href='AboutMe.html'> <p> About Me </p> </a>" +
							"<a href='AboutMe.html'> <p> About Me </p> </a>" +
							"</div>" + 
							"<div id='contextOptions'>" +
							"<a href='#title' class='LeftSide'> <p> Back to top </p> </a>" +
							"<a href='../Credits.html' class='LeftSide'> <p> Special Thanks </p> </a>" +
							"</div> <div id='copyright'> <p> @2026, Celeste/Cesaster, </p>" +
							"</div>" +
							"</div>"
	}
}
let footer = new Footer();
addEventListener("load", (event) => { footer.Generate() });
