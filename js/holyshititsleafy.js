var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
canvas.addEventListener("mousedown", plopImg, false);


// Setting Up Audio
var sound = new Howl({
  urls: ['audio/jeff-quick.wav']
});
var altSound = new Howl({
  urls: ['audio/jeff-bass.wav']
});


  $( window ).resize(function() {
  context.canvas.width  = window.innerWidth;
  context.canvas.height = window.innerHeight;

  		var bgObj = new Image();
		bgObj.onload = function(){
			context.drawImage( bgObj, 0, 0 ,context.canvas.width ,  context.canvas.height);
		};
		bgObj.src = 'img/mynamajeff.png';
});
	
$(document).ready(function(){
		context.canvas.width  = window.innerWidth;
		context.canvas.height = window.innerHeight;
		var bgObj = new Image();
		bgObj.onload = function(){
			context.drawImage( bgObj, 0, 0 , context.canvas.width ,  context.canvas.height);
		};
		bgObj.src = 'img/mynamajeff.png';

});
	
	
	

function plopImg(event)
{
  var x = event.clientX;
  var y = event.clientY;
  var imageObj = new Image();
  imageObj.onload = function() {
    context.drawImage(imageObj, x - 143, y - 198);
  };
 if ((Math.floor((Math.random() * 5) + 1)) == 5){
	imageObj.src = 'img/jeff-distort.png';
	altSound.play();
 } else {
	//You Clever Dan
	imageObj.src = 'img/jeff.jpg';
	sound.play();
 }

}


