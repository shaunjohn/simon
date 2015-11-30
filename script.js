$(document).ready(function() { //do this when page loads

	var colorArray = [
		{
			color: 'green',
			doAction: greenlight
		},
		{
			color: 'red',
			doAction: redlight
		},
		{
			color: 'yellow',
			doAction: yellowlight
		},
		{
			color: 'blue',
			doAction: bluelight
		}];

	console.log('function array: ', colorArray);
	var gameArray = [];
	var turnsPlayed = 0;
	var current = 0;
	var pushes = 0;

	function getRandomColor () {
		return colorArray[Math.floor(Math.random() * colorArray.length)];
	}

	function failSound() {
		// css.changeColor();
		alert('fail sound happened');
	}

	$(".tap-pad").click(function() {
		var selectedColor = $(this).attr('data-color');
		console.log('selectedColor: ', selectedColor);

		if ( selectedColor !== gameArray[pushes].color ) {
			failSound();
			alert("Loosa! You only scored" + turnsPlayed + "nice try, for a loosa");
			turnsPlayed++;
			return;
		}

		pushes++;

		if ( pushes === gameArray.length ) {
			setTimeout(function () {
				current = 0;
				pushes = 0;
				gameArray.push(getRandomColor());
				goSimon();
			}, 2500);
		}
	});

	function goSimon () {
		if ( gameArray.length - 1 < current ) {
			return;
		}
		gameArray[current].doAction();
	}


  $("#simon-button").click(function() { // game starts
  	console.log('gameplay running');
  	gameArray.push(getRandomColor());
  	goSimon();
  });


  function greenlight() {
  	$("#green-button").css("background-color", "white"); 
		setTimeout(function(){ // toggle back after 1 second  
	 		$("#green-button").css("background-color", "green");
	 		current++;
	 		goSimon(); 
	 	},250);
	};

  function redlight() {
  	$("#red-button").css("background-color", "white"); 
		setTimeout(function(){ // toggle back after 1 second  
	 		$("#red-button").css("background-color", "red"); 
	 		current++;
	 		goSimon(); 
	 	},250);
	};

  function yellowlight() {
  	$("#yellow-button").css("background-color", "white"); 
		setTimeout(function(){ // toggle back after 1 second  
	 		$("#yellow-button").css("background-color", "yellow"); 
	 		current++;
	 		goSimon(); 
	 	},250);
	};

  function bluelight() {
  	$("#blue-button").css("background-color", "white"); 
		setTimeout(function(){ // toggle back after 1 second  
	 		$("#blue-button").css("background-color", "blue"); 
	 		current++;
	 		goSimon(); 
	 	},250);
	};	

});






/*alert("hello");

game starts when simon is clicked

count = 1;

color-array = [red,yellow,blue,green]
memory-array = []

color-array.random

for i = count {

	light up the 
}


$(document).ready(function() {
  $("button").mouseover(function() {
    var p = $("p#44.test").css("background-color", "yellow");
    p.hide(1500).show(1500);
    p.queue(function() {
      p.css("background-color", "red");
    });
  });
});

*/