// ////// AVENTURE GAME!!!!! /////////

// reborn in a fiery ball of javascript

// (c) nick merritt 2015

// send complaints, etc to nicholasjmerritt@gmail.com



////// utility functions //////

// todo say queue? so delay works? idk
function say(hi, delay) {
	if (!hi) var hi = '';
	if (!delay) var delay = 1000;
	$('<p>' + String(hi) + '</p>').appendTo("#console").fadeIn(delay);
}


////// person class and list of people //////

var Person = function (name) {
	say('person ' + String(name) + ' created');
	this.name = name;
	say("person's name is " + this.name);
};

var bob = new Person('bob');


////// room class and list of rooms //////

var Room = function (name) {
	say('room ' + String(name) + ' created');
	this.name = name
	say('room\'s name is ' + this.name);
};

var tavern = new Room('tavern');


////// LET THE GAMES BEGIN //////
$(document).ready(function() {

	$("#command_line").fadeIn(1000);

	say("you are a yamabushi, a japanese warrior monk from the 1800s.");
	say("you are in the post office, mailing a samurai sword to your friend Takeshi.", 4000);
	say()
	say()
	say("also, you have no arms.", 10000);

	var current_room = "yuubinkyoku"

	$("form").submit(function() {

		var input = $("#command_line").val();

		// help
		if (input.indexOf("help") > -1) {
			if (input == "help") {
				say($("#message_help"));
			}
		}


		// clear
		else if (input == "clear") {
			$("#console").empty()
		}


		// death
		if (input == "death") {
			$("#container").fadeOut(3000, function() {
				//$('#footer').empty();
				$('#footer').prepend("<p>bwahahahahaha u suck</p>");
			});
		}


		
		else if (input != "") {
			say('input was:');
			say(input);

			say('room is:');
			say(current_room);

			current_room = input			
		}

		//reset cli
		$("#console").scrollTop($("#console")[0].scrollHeight);
		$("#command_line").val("");
	});
});