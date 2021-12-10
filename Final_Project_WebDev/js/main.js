var fact0 = "Fungi are genetically closer to humans than plants.";
var fact1 = "Fungi breath oxygen and exhale CO<sub>2</sub>.";
var fact2 = "One cubic inch of soil can contain enough mycelium to stretch over eight miles.";
var fact3 = "Mushrooms are the 'fruit' of myceluim, and is only 5 percent of the organism.";
var fact4 = "The largest organism on earth is a honey fungus, capable of spreading 2.4 miles across.";
var fact5 = "Mushroom spores are made of the hardest plant material, sporopollenin.";
var fact6 = "Mushroom spores can survive the vaccum and radiation of space.";
var fact7 = "Mushrooms will produce Vitamin D when exposed to UV light, although they don't require light to grow.";
var fact8 = "The first antibiotic ever used in medicine is derived from a fungi: Penicillin Mold.";
var fact9 = "There are several species of fungi that are bioluminescent, glowing as they grow.";

var pic0 = "photos/bugShroom.jpg";
var pic1 = "photos/colorfulFungi.jpg";
var pic2 = "photos/coolShroom.jpg";
var pic3 = "photos/glowShoom2.jpg";
var pic4 = "photos/glowShoom3.jpg";
var pic5 = "photos/glowShrooms.jpg";
var pic6 = "photos/treeShrooms.jpg";
var pic7 = "photos/jngFungi.jpg";
var pic8 = "photos/bloomFungi.jpg";
var pic9 = "photos/groupFungi.jpg";
var x;
var y;
var oldx = 20;
var oldy = 20;

function randFact() {
	x = Math.floor(Math.random()*10);
	y = Math.floor(Math.random()*10);
	while (x == oldx) {
		x = Math.floor(Math.random()*10);
	}
	while (y == oldy) {
		y = Math.floor(Math.random()*10);
	}
	oldx = x;
	oldy = y;
	switch (x) {
		case 0:
			document.getElementById('fact').innerHTML = fact0;
			break;

		case 1:
			document.getElementById('fact').innerHTML = fact1;
			break;

		case 2:
			document.getElementById('fact').innerHTML = fact2;
			break;

		case 3:
			document.getElementById('fact').innerHTML = fact3;
			break;

		case 4:
			document.getElementById('fact').innerHTML = fact4;
			break;

		case 5:
			document.getElementById('fact').innerHTML = fact5;
			break;

		case 6:
			document.getElementById('fact').innerHTML = fact6;
			break;

		case 7:
			document.getElementById('fact').innerHTML = fact7;
			break;

		case 8:
			document.getElementById('fact').innerHTML = fact8;
			break;

		case 9:
			document.getElementById('fact').innerHTML = fact9;
			break;
	}
	switch (y) {
		case 0:
			document.getElementById('pic').src = pic0;
			break;

		case 1:
			document.getElementById('pic').src = pic1;
			break;

		case 2:
			document.getElementById('pic').src = pic2;
			break;

		case 3:
			document.getElementById('pic').src = pic3;
			break;

		case 4:
			document.getElementById('pic').src = pic4;
			break;

		case 5:
			document.getElementById('pic').src = pic5;
			break;

		case 6:
			document.getElementById('pic').src = pic6;
			break;

		case 7:
			document.getElementById('pic').src = pic7;
			break;

		case 8:
			document.getElementById('pic').src = pic8;
			break;

		case 9:
			document.getElementById('pic').src = pic9;
			break;
	}
}

window.onload = function(){
	randFact();
}
