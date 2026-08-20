export default class Generator
{
	var content;
	var name;

	Generate()
	{
		const newElement = document.createElement("div");
		const header = RetrieveElement


		newElement.innerHTML = headerContent;
		const node = new DOMParser().parseFromString(headerContent, "text/html").body;

		header.appendChild(node.childNodes[0]);
	}

	RetrieveElement()
	{
		return null;
	}

}
