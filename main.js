function preload() {
    
}

function setup() {
canvas = createCanvas(640,480);
canvas.position(110,250);
video= createCapture(VIDEO);
video.hide();
tint_colour= "";
}

function draw() {
circle(30,30,50);
stroke(10,255,255);
fill(200,255,255);
circle(610,30,50);
stroke(10,255,255);
fill(200,255,255);
circle(30,450,50);
stroke(10,255,255);
fill(200,255,255);
circle(610,450,50);
stroke(10,255,255);
fill(200,255,255);
}

function take_snapshot() {
save('student_name.png');  
}

function filter() {
tint_colour= document.getElementById("colour_name").value;   
}