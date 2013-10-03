"use strict";

var selectedParts = {};

function init()
{
	var container = document.getElementById("container");
	var buttons = document.getElementById("buttons");
	
	for(var currentPart in parts)
	{
		container.innerHTML += generateImage(currentPart);
		buttons.innerHTML += generateButton(currentPart, "previous");
		buttons.innerHTML += generateButton(currentPart, "next");
		
		selectedParts[currentPart] = 0;
		
		console.log("added:" + currentPart);
	}
	
	for(var currentPart in parts)
	{
		addChangeEvent(currentPart, "previous");
		addChangeEvent(currentPart, "next");
	}
}

function addChangeEvent(part, direction)
{
	document.getElementById(part + "_" + direction).addEventListener("click", function(){change(part, direction);}, false);
}

function change(part, direction)
{
	if(direction == "previous")
	{selectedParts[part] = (selectedParts[part] + parts[part].length - 1) % parts[part].length;}
	
	if(direction == "next")
	{selectedParts[part] = (selectedParts[part] + parts[part].length + 1) % parts[part].length;}
	
	console.log(selectedParts[part]);
	
	document.getElementById(part).src = "data/images/" + parts[part][selectedParts[part]] + ".svg";
}

function generateImage(part)
{
	return "<img id=\"" + part + "\" src=\"data/images/none.svg\" />";
}

function generateButton(part, direction)
{
	return "<input id=\"" + part + "_" + direction + "\" type=\"button\" value=\"" + part + " " + direction + "\" />";
}