var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
canvas.addEventListener("mousedown", plopImg, false);


// Setting Up Audio
var sound = new Howl({
  urls: ['audio/leafy.mp3']
});
var altSound = new Howl({
  urls: ['audio/leafy.mp3']
});


  $( window ).resize(function() {
  context.canvas.width  = window.innerWidth;
  context.canvas.height = window.innerHeight;

  		var bgObj = new Image();
		bgObj.onload = function(){
			context.drawImage( bgObj, 0, 0 ,context.canvas.width ,  context.canvas.height);
		};
		bgObj.src = 'img/bg.jpg';
});
	
$(document).ready(function(){
		context.canvas.width  = window.innerWidth;
		context.canvas.height = window.innerHeight;
		var bgObj = new Image();
		bgObj.onload = function(){
			context.drawImage( bgObj, 0, 0 , context.canvas.width ,  context.canvas.height);
		};
		bgObj.src = 'img/bg.jpg';

});
	
	
	

function plopImg(event)
{
  var x = event.clientX;
  var y = event.clientY;
  var imageObj = new Image();
  imageObj.onload = function() {
    context.drawImage(imageObj, x - 143, y - 198);
  };
 if ((Math.floor((Math.random() * 15) + 1)) == 15){
	imageObj.src = 'img/leafyisqueer.png';
	altSound.play();
 } else {
	//You Clever Dan
	imageObj.src = 'img/holyshit.png';
	sound.play();
 }

}


