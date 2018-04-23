var colors1=173;
var colors2=241;
var colors3=255;
function setup() {
  createCanvas(1000,1000)
  background(188,173,255);
}

function draw() {
	noStroke()
	//line(mouseX,mouseY,500,500);
	fill(colors1,colors2,colors3);
	ellipse(mouseX,mouseY,25);
	rect(mouseX,mouseY,20,20);
	//triangle(mouseX,mouseY,20,20,20,20);
  
  
}
function mousePressed (){
colors1= random(1,255);
colors2= random(1,255);
colors3= random(1,255);
	
}