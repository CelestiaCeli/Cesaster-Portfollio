import Generator from "./Generator.js"

class BackToCard extends Generator
{
	constructor()
	{
		super();
		this.ID = "stickyElements";
		this.content =	"<div>" +
						"<a>" +
						"<p>" +
							"Friend Mode" +
						"</p>"
						"</a>"
						"</div>"

	}
}

let backToCard = new BackToCard();
addEventListener("load", (event) => { backToCard.Generate() });
