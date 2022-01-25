noseX = 0
noseY = 0
leftEyeX = 0
leftEyeY = 0

function preload() {
    mustachImage = loadImage('https://i.postimg.cc/02MJzxLZ/pngegg.png')
    hatImage = loadImage('https://i.postimg.cc/Ghm9DRV6/Black-Top-Hat-PNG-Clipart-769075303.png')
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("poseNet is initiated")
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 25;
        noseY = results[0].pose.nose.y +2;
        leftEyeX = results[0].pose.leftEye.x - 80 ;
        leftEyeY = results[0].pose.leftEye.y - 150;
        console.log("position of nose in x value = " + noseX);
        console.log("position of nose in y value = " + noseY);
        console.log("position of eye in x value = " + leftEyeX);
        console.log("position of eye in y value = " + leftEyeY);

    }
}

function draw() {
    image(video, 0, 0, 400, 400);
   image(mustachImage,noseX,noseY,60,40);
   image(hatImage,leftEyeX,leftEyeY,140,120)

}

function take_snap() {
    save('cloneface.png');
}