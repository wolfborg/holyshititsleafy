var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
canvas.addEventListener("mousedown", plopImg, false);


// Setting Up Audio
var sound = new Howl({
  urls: ['audio/zucc3.wav']
});
var altSound = new Howl({
  urls: ['audio/zucc1.wav']
});
var altSound2 = new Howl({
  urls: ['audio/zucc2.wav']
});


  $( window ).resize(function() {
  context.canvas.width  = window.innerWidth;
  context.canvas.height = window.innerHeight;

  		var bgObj = new Image();
		bgObj.onload = function(){
			context.drawImage( bgObj, 0, 0 ,context.canvas.width ,  context.canvas.height);
		};
		bgObj.src = 'img/zucc-bg.jpg';
});
	
$(document).ready(function(){
		context.canvas.width  = window.innerWidth;
		context.canvas.height = window.innerHeight;
		var bgObj = new Image();
		bgObj.onload = function(){
			context.drawImage( bgObj, 0, 0 , context.canvas.width ,  context.canvas.height);
		};
		bgObj.src = 'img/zucc-bg.jpg';

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
	if ((Math.floor((Math.random() * 2) + 1)) == 2){
		imageObj.src = 'img/zucc3.jpg';
		altSound2.play();
	} else {
		imageObj.src = 'img/zucc2.jpeg';
		altSound.play();
	}
 } else {
	imageObj.src = 'img/zucc1.png';
	sound.play();
 }

}


