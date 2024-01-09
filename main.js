objectDetector = "";
img = "";
objects = [];
status = "";


function preload(){
    img = loadImage("https://ichef.bbci.co.uk/news/640/cpsprodpb/12DF4/production/_120600377_gettyimages-637743724.jpg")
}

function setup(){
canvas = createCanvas(650, 420);
canvas.center;
objectDetector = ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML = "el modelo ya cargo"
}

function modelLoaded(){
    console.log("modelo cargado");
    status = true;
    objectDetector.detect(img, gotResults);
}


function draw(){

}