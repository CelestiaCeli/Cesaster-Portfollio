const DEFAULT_HIGHFADE = 100;
const DEFAULT_LOWFADE = 0;
const DEFAULT_TIME = 5;
const MILISECOND_AMPLIFIER = 100;

export default class Fader 
{
	constructor(_lowFade, _highFade, _time) 
	{
		this.SetFadeAmt(_lowFade, _highFade);
		this.time = _time * MILISECOND_AMPLIFIER;
	}

	static FadeOnly(_lowFade, _highFade)
	{
		return new Fader(_lowFade, _highFade, DEFAULT_TIME);
	}

	static TimeOnly(_time)
	{
		return new Fader(DEFAULT_LOWFADE, DEFAULT_HIGHFADE, _time);
	}

	FadeAction(fadeAmt) {}
	FadeFinished() {}

	SetFadeAmt(_lowFade, _highFade)
	{
		this.lowFade = _lowFade;
		this.highFade = _highFade;
	}

	GenerateFade()
	{
		var fadeInAnim = [ { opacity: lowFadeAmt + "%" }, { opacity: highFadeAmt + "%" } ];
		var fadeOutAnim = [ { opacity: highFadeAmt + "%" }, { opacity: lowFadeAmt + "%" } ];
		var titleFadeSpeed = { duration: this.time, iterations: 1, complete: FadeFinished(), }

		if (fadeIn = true)
		{
			return (fadeInAnim, titleFadeSpeed);
		}
		else
		{
			return (fadeOutAnim, titleFadeSpeed);
		}
	}
}
