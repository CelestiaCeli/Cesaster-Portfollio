export default class Project
{
	constructor(_staticImage, _animatedImage)
	{
		this.staticImage = _staticImage;
		this.animatedImage = _animatedImage;
		this.hover = false;
	}

	OnHover()
	{
		if (hover == false)
		{
			SetAnimated();
		}
		else
		{
			SetStatic();
		}

		this.hover = !this.hover;

	}

	SetAnimated() {}

	SetStatic() {}
}


