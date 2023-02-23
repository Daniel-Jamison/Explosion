var layer1;
var ctx1;

var width = Math.floor(window.innerWidth);
var height = Math.floor(window.innerHeight);

var Time = 0

layer1 = document.getElementById("layer1");
ctx1 = layer1.getContext("2d");
layer1.width = width;
layer1.height = height;
				
var timer = setInterval(drawAll, 5);

function drawAll() 
{
	T = Time*.05
	
	ctx1.clearRect(0, 0, width, height);
	ctx1.strokeStyle = "black";
	ctx1.lineWidth = 10;
	
	x = width*.5;
	y = height*.5;
	
	StartColor = [255, 50, 0];  //Adjust this RGB value to pick what color to start with
	
	for (let i = 2; i< 10; i++)
	{	
		rad = 50*(1-Math.exp(-1*(.09*i)*T))
		
		r = StartColor[0]+rad*(255-StartColor[0])/50
		g = StartColor[1]+rad*(255-StartColor[1])/50
		b = StartColor[2]+rad*(255-StartColor[2])/50	
		
		ctx1.strokeStyle = `rgb(${255}, ${g}, ${b})`;
		ctx1.beginPath();
		ctx1.arc(x, y, rad, 0, 2 * Math.PI);
		ctx1.stroke();
	}
		
	Time = Time + 1	
}