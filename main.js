earX=0;
earY=0;
img=""

function preload() {
 
}



function setup() {
    canvas = createCanvas(400,400);
    canvas.center();

    video = createCapture(VIDEO)
    video.hide()


    model = ml5.poseNet(video , modelLoaded);
    model.on("pose" , showResult);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function showResult(results)
{
  if(results)
  {
    console.log(results)
    noseX = result[0].pose.ear.x
    noseY = result[0].pose.ear.y
  }
}

function draw() {
  image(video, 0, 0, 400, 400);

 
}

function take_snapshot(){    
  save('Image.png');
}
