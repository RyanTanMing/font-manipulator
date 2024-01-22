nosex=0
nosey=0
rightwristx=0
leftwristx=0
difference=0
function setup() {
    video=createCapture(VIDEO)
    video.size(550,500)
    canvas=createCanvas(600,600)
    canvas.position(700,150)
    pn=ml5.poseNet(video,model_loaded)
    pn.on('pose',got_poses)
}
function draw() {
    background('cyan')
    document.getElementById("square_side").innerHTML="Width and height of the text will be: "+difference+"px"
    textSize(difference)
    text("Ryan",nosex,nosey)
}
function model_loaded() {
    console.log("posenet has been initialnised")
}
function got_poses(results) {
    if (results.length>0) {
        //console.log(results)
        nosex=results[0].pose.nose.x
        nosey=results[0].pose.nose.y
        leftwristx=results[0].pose.leftWrist.x
        rightwristx=results[0].pose.rightWrist.x
        difference=Math.floor(leftwristx-rightwristx)
        console.log(difference)
    }
}
