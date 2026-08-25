import Generator from "./Generator.js"

class Header extends Generator
{
	constructor()
	{
		super();
		this.ID = "header";
		this.content =	"<div id='generatedHeader'>" +
						"<img id='headerBackground' src='../../../Assets/Backgrounds/Background.webp'>" +
						"<section id='title'>" +
							"<h1>" +
							"Celeste" +
							"</h1>" +
						"</section>" +

						"<header>" +
							"<a href='Extended.html'>" +
							"<h3>" +
							"Portfolio" +
							"</h3>" +
							"</a>" +
							"<a href='AboutMe.html'>" +
							"<h3>" + 
							"About Me" +
							"</h3>" +
							"</a>" +
							"<a href='Promo.html'>" +
							"<h3>" +
							"Promo Video" +
							"</h3>" +
							"</a>" +
							"<a href='../Card.html'>" +
							"<h3>" +
							"Back To Card" +
							"</h3>" +
							"</a>" +
						"</header>"

	}
}

let header = new Header();
addEventListener("load", (event) => { header.Generate() });
