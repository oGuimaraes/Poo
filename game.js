var currentScenario = 1;

$("#next-scenario").click(function() {
	currentScenario = (currentScenario + 1);
	if (currentScenario > 2) {
		currentScenario = 0;
	}
	setRoomSelected();
	
	if (currentScenario != 0) {
		 $("#action-drink").hide()
	}

	else {
		$("#action-drink").show()
	}

	if (currentScenario == 0) {
		$("#kitchen").show();
		$("#eat-button").show();
		$("#drink-button").show();
		$("#bedroom").hide();
		$("#sleep-button").hide();
		$("#wc").hide();
		$("#urinate-button").hide();
	}

	else if (currentScenario == 1) {
		$("#kitchen").hide();
		$("#eat-button").hide();
		$("#drink-button").hide();
		$("#bedroom").show();
		$("#sleep-button").show();
		$("#wc").hide();
		$("#urinate-button").hide();

	}

	else {
		$("#kitchen").hide();
		$("#eat-button").hide();
		$("#drink-button").hide();	
		$("#bedroom").hide();
		$("#sleep-button").hide();
		$("#wc").show();
		$("#urinate-button").show();
	}
});

$("#previous-scenario").click(function() {
	currentScenario = (currentScenario - 1);
	if (currentScenario < 0) {
		currentScenario = 2;
	}
	setRoomSelected();

		if (currentScenario != 0) {
		 $("#action-drink").hide()
	}

	else {
		$("#action-drink").show()
	}

	if (currentScenario == 0) {
		$("#kitchen").show();
		$("#eat-button").show();
		$("#drink-button").show();
		$("#bedroom").hide();
		$("#sleep-button").hide();
		$("#wc").hide();
		$("#urinate-button").hide();
	}

	else if (currentScenario == 1) {
		$("#kitchen").hide();
		$("#eat-button").hide();
		$("#drink-button").hide();
		$("#bedroom").show();
		$("#sleep-button").show();
		$("#wc").hide();
		$("#urinate-button").hide();

	}

	else {
		$("#kitchen").hide();
		$("#eat-button").hide();
		$("#drink-button").hide();	
		$("#bedroom").hide();
		$("#sleep-button").hide();
		$("#wc").show();
		$("#urinate-button").show();
	}
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

}, (1000*1));

var actionDrink = $("#action-drink")

$("#eat-button").click(function(){
	hungry = (hungry - getRandomInt(3,6));
	if (hungry < 0) {
			hungry = 0;
	}
	setHungry(hungry);
});

$("#drink-button").click(function(){
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
	setHungry(hungry);

	
});

$("#urinate-button").click(function() {
	bursting = 0;
	setBursting(bursting);

});

$("#sleep-button").click(function() {
	sleepy = 0;
	setSleepy(sleepy);

});


function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
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

