import Project from "./Project.js"

class ProjectByID extends Project
{
	constructor(_elementID, _staticImage, _animatedImage)
	{
		super(_staticImage, _animatedImage);
		this.elementID = _elementID;
	}

	RetrieveImage()
	{
		var images = element.getElementsByTagName("img");
		var specificImage = images.FindID(this.elementID);
		return specificImage;
	}

	SetAnimated = function()
	{
		var specificImage = RetrieveImage();
		specificImage.src = animatedImage;
	}

	SetStatic = function()
	{
		var specificImage = RetrieveImage();
		specificImage.src = staticImage;
	}
}
