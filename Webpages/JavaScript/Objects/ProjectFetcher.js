export default class Project
{
	constructor(var projectName)
	{
		{
			this.projectName = projectName;
			this.projectDirectory = "/Webpages/JSON/Objects/Projects/" + this.projectName + ".json";
		}
		catch
		{
			this.invalid();
		}

	}
	
	function invalid()
	{
		console.log("Error: Project name is not valid!");
	}

	function ScanProjects()
	{
		try
		{
			var data;


			var projectName = data;
			this.project[i] = new Project(projectName);

		}
		catch
		{
			this.invalid();
		}
	}

	function SetProject(var ProjectName)
	{
		try
		{
			this.projectName = projectName;
			this.projectDirectory = "/Webpages/JSON/Objects/Projects/" + this.projectName + ".json";
		}
		catch
		{
			this.invalid();
		}
	}


}
