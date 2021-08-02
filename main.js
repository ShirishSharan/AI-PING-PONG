img = "";
noseX = 0;
noseY = 0;




function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
  video = createCapture(VIDEO);
  video.size(600,300);
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function gotPoses(results){
  if(results.length>0){
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX:" + noseX + ", noseY:" + noseY);
  }
}

function modelLoaded(){
  console.log("Model is Loaded !")
}

function draw() {
  background("lightgreen");
  
  
}















