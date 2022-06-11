function preload() {
	world_start = loadSound("world_start.wav");
	coin_sound=loadSound("coin.wav")
   kick_sound=loadSound("kick.wav")
   mariodie=loadSound("mariodie.wav")
   jump_sound=loadSound("jump.wav")
   gameover=loadSound("gameover.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas")
	instializeInSetup(mario);
	video=createCapture(VIDEO)
	video.size(800,400)
	video.parent("game_console")
	posenet=ml5.poseNet(video,modelloaded)
    posenet.on("pose", gotposes)
 }
function modelloaded(){
console.log("model is loaded");	
}
function gotposes(results){
 console.logresults
 if(results.length>0){
 nosex=results[0].pose.nose.x
 nosey=results[0].pose.nose.y
 }
}

function draw() {
	game()
}






