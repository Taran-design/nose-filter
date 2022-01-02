function preload(){
apple=loadImage("https://i.postimg.cc/rmDDWtFb/download-removebg-preview.png");
}
noseX=0
noseY=0
function setup(){
canvas=createCanvas(450,450);
//canvas.position(800,250);
canvas.center();
video=createCapture(VIDEO);
video.size(450,450);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded); 
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
 console.log('poseNet is initialised');  
}
function gotPoses(results){
if(results.length>0){
 noseX=results[0].pose.nose.x; 
 noseY=results[0].pose.nose.y;   
}
}



function draw(){
image(video,0,0,450,450);
image(apple,noseX,noseY,69,36);
}

function snapshots(){
save("imgg.png");
}