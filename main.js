
function preload(){

}
function setup(){
    Canvas=createCanvas(1500,600);
    Canvas.center();
    Video=createCapture(VIDEO);
    Video.hide();
    tint_colour="";
}
function draw(){
image(Video,25,50,1450,500);
tint(tint_colour);
}
function apply_filter(){
tint_colour=document.getElementById("colour").Value;
}
function take_snapshot(){
    save("beans.jpg");
}

