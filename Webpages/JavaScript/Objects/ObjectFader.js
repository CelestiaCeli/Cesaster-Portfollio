import Fader from "./Fader.js"

class ObjectFader extends Fader
{
	constructor(_element, _lowFade, _highFade, _time)
	{
		this.element = _element;
		super(_lowFade, _highFade, _time);
	}

	constructor(_element, _lowFade, _highFade)
	{
		this.element = _element;
		super(_lowFade, _highFade);
	}


	constructor(_element, _time)
	{
		this.element = _element;
		super(_time);
	}



}
