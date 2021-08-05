rightWristX = 0;
rightWristY = 0;
scoreRightWrist = 0;
game_status = " ";




function preload()
{
  ball_touch_paddel = loadSound("ball_touch_paddel.wav");
  missed = loadSound("missed.wav");
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(1050,450);
	video.parent('game_console');
	poseNet = ml5.poseNet(video,modelLoaded);
	poseNet.on('pose' , gotPoses);
}

function start_game()
{
  game_status = "start";
  document.getElementById("game_status_btn").innerHTML = "Game Is Loading...";
}

function draw() 
{
image(video,0,0,700,545);
fill("black");
  stroke("black");
  rect(680,0,20,700);

  fill("black");
  stroke("black");
  rect(0,0,20,700);    
if(scoreRightWrist > 0.2)
{
fill("red");
stroke("red");
circle(rightWristX, rightWristY, 30);
}
}





























function modelLoaded()
{
    console.log("modelLoaded");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
      console.log(results);
      rightWristX = results[0].pose.rightWrist.x;
      rightWristY = results[0].pose.rightWrist.y;
      console.log("rightWristX = " +  rightWristX + "rightWristY = " +  rightWristY );
      scoreRightWrist =  results[0].pose.keypoints[10].score;
    console.log(scoreRightWrist);
    
    }
  }

