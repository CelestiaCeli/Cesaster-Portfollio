export default class Generator
{
	constructor()
	{
		this.name = "null";
		this.ID = "null";
	}

	Generate()
	{
		console.log(this.ID);
		const selectedElement = document.getElementById(this.ID);
		const newElement = document.createElement("div");

		newElement.innerHTML = this.content;
		const node = new DOMParser().parseFromString(this.content, "text/html").body;

		console.log(selectedElement);
		selectedElement.appendChild(node.childNodes[0]);
	}

	RetrieveElement()
	{
		return null;
	}

}
