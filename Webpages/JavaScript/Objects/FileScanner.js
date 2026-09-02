export default class FileScanner
{
	constructor(_filePath)
	{
		if (ValidPath(_filePath))
		{
			this.filePath = _filePath;
		}
		else
		{
			console.log("Wrong file path. Please set a correct one!");
		}
	}

	function ValidatePath()
	{
		
	}

	function GetFileCount()
	{
		
	}

	function ChangeFilePath()
	{

	}
}
