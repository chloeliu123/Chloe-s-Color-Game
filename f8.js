var squares = document.querySelectorAll(".square");
var colors = [];
var index = 0;
shuffle();
var background = document.querySelector(".jumbotron");

refresh();
shuffle(6);

newColor.addEventListener("click", function(){
	easy.classList.remove("selected");
	hard.classList.add("selected");
	refresh();
	shuffle(6);
});

easy.addEventListener("click", function(){
	hard.classList.remove("selected");
	easy.classList.add("selected");
	refresh();
	shuffle(3);
	for (var i = 3; i < 6; i++) {
		squares[i].style.backgroundColor = "black";
	}
});

hard.addEventListener("click", function(){
	easy.classList.remove("selected");
	hard.classList.add("selected");
	refresh();
	shuffle(6);
});

function refresh() {
	newColor.textContent = "NEW COLORS"
	background.style.backgroundColor = "rgb(254, 1, 144)";
	change.textContent = "";
	change.classList.remove(change.classList[0]);
}

function shuffle(n) {
	colors = genRanCol(n);
	index = random_num(n);
	color.textContent = colors[index];
	for(var i = 0; i < colors.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", function(){
			if (this.style.backgroundColor === color.textContent) {
				changeColors(squares);
				change.textContent = "Correct!";
				change.classList.add("rainbow");
				newColor.textContent = "PLAY AGAIN?"
			} else {
				this.style.backgroundColor = "rgb(0, 0, 0)";
				change.textContent = "Try Again!";
			}
		});
	}
}

function changeColors(arr) {
		background.style.backgroundColor = colors[index];
		for(var i = 0; i < colors.length; i++) {
			arr[i].style.backgroundColor = colors[index];
		}
	}

function random_num(n) {
	return Math.round(Math.random() * n);
}


function genRanCol(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(random_rgba());
	}
	return arr;
}

function random_rgba() {
	var o = Math.round, 
	r = Math.random, 
	s = 255;
    return 'rgb(' + o(r()*s) + ', ' + o(r()*s) + ', ' + o(r()*s) + ')';
}


