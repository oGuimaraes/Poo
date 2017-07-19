var scenarios = ["url(http://www.betdicas.org/img/fotos/cozinha%20planejada%20branca%206.jpg",
				 "url(http://1.bp.blogspot.com/-39SIFy-aj5Y/Td_eGZD2zwI/AAAAAAAALdc/fGMNW2JRuQM/s1600/full_HD_wallpaper%2B%252826%2529-716641.jpg)",
				 "url(https://c.mlcdn.com.br/1500x1500/gabinete-para-banheiro-com-cuba-e-espelho-1-porta1-gaveta-vtec-pegasus-215325300.jpg)"];
var currentScenario = 0;

$("#next-scenario").click(function() {
	currentScenario = (currentScenario + 1);
	if (currentScenario > 2) {
		currentScenario = 0;
	}
	setActionText();
	setRoomSelected()
	$("#scenario").css("background-image", scenarios[currentScenario]);

	if (currentScenario != 0) {
		 $("#action-drink").hide()
	}

	else {
		$("#action-drink").show()
	}

	if (currentScenario == 0) {
		$("#scenario").css("background-size","123%")
	}

	else if (currentScenario == 1) {
		$("#scenario").css("background-size","108%")
	}

	else {
		$("#scenario").css("background-size","100%")
	}
});

$("#previous-scenario").click(function() {
	currentScenario = (currentScenario - 1);
	if (currentScenario < 0) {
		currentScenario = 2;
	}
	setActionText();
	setRoomSelected()
	$("#scenario").css("background-image", scenarios[currentScenario]);
});

var hungry = 0;
var sleepy = 0;
var bursting = 0;

setInterval(function() {
	hungry = hungry + 3;
	if (hungry > 100) {
		hungry = 100;
	}

	sleepy = sleepy + 2;
	if (sleepy > 100) {
		sleepy = 100;
	}

	bursting = bursting + 1;
	if (bursting > 100) {
		bursting = 100;
	}

	setSleepy(sleepy);
	setHungry(hungry);
	setBursting(bursting);

}, (1000*3));

var actionButton = $("#action-button");
var actionDrink = $("#action-drink")

actionButton.click(function(){
	if (actionButton.text() === "Comer") {
		hungry = (hungry - getRandomInt(3,6));
		if (hungry < 0) {
			hungry = 0;
		}
		setHungry(hungry);
	}
	else if (actionButton.text() === "Dormir") {
		sleepy = 0;
		setSleepy(sleepy);
	}
	else {
		bursting = 0;
		setBursting(bursting);
	}
});

actionDrink.click(function(){
	if (actionDrink.text() === "Beber") {
		hungry = (hungry - getRandomInt(10,13));
		bursting = (bursting + getRandomInt(5,10))

		if (bursting < 0) {
			bursting = 0;
		}

		if (bursting > 100) {
			bursting = 100;
		}

		if (hungry < 0) {
			hungry = 0;
		}

		setBursting(bursting);
		setHungry(hungry)
	}
});


function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function setActionText(){
	if (currentScenario == 0) {
		$("#action-button").text("Comer");
	}
	else if (currentScenario == 1) {
		$("#action-button").text("Dormir");
	} 
	else {
		$("#action-button").text("Urinar");
	}
}

function setRoomSelected(){
		if (currentScenario == 0) {
		$(".room-selected").text("Cozinha");
	}
	else if (currentScenario == 1) {
		$(".room-selected").text("Quarto");
	} 
	else {
		$(".room-selected").text("Banheiro");
	}
}

function setHungry(hungry) {
	$("#hungry").text("Fome: " + hungry + "%");
}

function setSleepy(sleepy) {
	$('#sleepy').text("Sono: " + sleepy + "%");		
}

function setBursting(bursting) {
	$('#bursting').text("Vontade de urinar: " + bursting + "%");
}