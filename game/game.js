//////// AVENTURE GAME!!!!! /////////

// reborn in a fiery ball of javascript

// (c) nick merritt 2015

// send complaints, etc to nicholasjmerritt@gmail.com



////// utility functions //////

// todo say queue? so delay works? idk
function say(msg, delay) {
	if (!msg) {
		$('<p><br></p>').appendTo("#console").fadeIn(delay);
		var msg = '';
	}
	if (!delay) var delay = 1000;
	$('<p>' + String(msg) + '</p>').appendTo("#console").fadeIn(delay);
}

function help() {
	say("do or do not. there is no help.");
}

function clc() {
	$("#console").empty();
}

function death() {
	say("You die a horrible and painful death.",1000);
	$("#container").fadeOut(5000, function() {
		//$('#footer').empty(); //TODO copyright or no?
		$('#footer').prepend("<p>bwahahahahaha u suck</p>");
	});
}

function oops() {
	say("oops, I didn't understand...");

	say('input was:');
	say(input);

	say('room is:');
	say(current_room);
}




////// person class and list of people //////

var Person = function (_name) {
	this.name = _name;
};

Person.prototype.setBackStory = function (_backstory) {
	this.backstory = _backstory;
};

Person.prototype.hi = function () {
	say("hello, " + this.name + "!");
}

var bob = new Person('Bob');
bob.setBackStory("you are a normal person with no special powers.");

var daisuke = new Person('Daisuke');
daisuke.setBackStory("you are a yamabushi, a japanese warrior monk from the 1800s.\n" +
	"you are in the post office, mailing a samurai sword to your friend Takeshi.\n" +
	"also, you have no right arm.");

start_players = [bob, daisuke];




////// room class and list of rooms //////

//Basic trap room
var Room = function (name) {
	
	this.name = name;

};

Room.prototype.north = function () {
		say("You can't go that way.");
}

Room.prototype.south = function () {
		say("You can't go that way.");
}

Room.prototype.east = function () {
		say("You can't go that way.");
}

Room.prototype.west = function () {
		say("You can't go that way.");
}

Room.prototype.setDescription = function (description) {
	this.description = description;
}

//DeathRoom inherits from Room
function DeathRoom (name) {
	Room.call(this, name);
}

DeathRoom.prototype = Object.create(Room.prototype);
DeathRoom.prototype.constructor = DeathRoom;

DeathRoom.prototype.north = function () {
	death();
}

DeathRoom.prototype.south = function () {
	death();
}

DeathRoom.prototype.east = function () {
	death();
}

DeathRoom.prototype.west = function () {
	death();
}


var tavern = new Room('tavern');
tavern.setDescription("you enter the greasy monkey tavern.\n" +
					  "it's really greasy.");

var yuubinkyoku = new DeathRoom('japanese post office');
yuubinkyoku.setDescription("you enter a japanese post office.\n" + 
						   "it's filled with deadly jello.");

start_rooms = [tavern, yuubinkyoku];





////// LET THE GAMES BEGIN //////
$(document).ready(function() {

	$("#command_line").fadeIn(1000);

	var current_room = start_rooms[Math.floor(Math.random() * start_rooms.length)];;
	var player = start_players[Math.floor(Math.random() * start_players.length)];

	say(player.backstory, 1000);
	say(current_room.description, 2000);

	// intro
	say("you wake suddenly, on the floor of a dark room...", 2000);
	say("type 'help' for usable actions...", 3000);

	$("form").submit(function() {

		var input = $("#command_line").val();

		if (input == "help") {
			help();
		}

		else if (input == "clear") {
			clc();
		}

		else if (input == "death") {
			death();
		}

		else if (input == "north") {
			current_room.north();
		}

		else if (input == "south") {
			current_room.south();
		}

		else if (input == "east") {
			current_room.east();
		}

		else if (input == "west") {
			current_room.west();
		}

		
		else if (input != "") {
			oops();		
		}

		//reset cli
		$("#console").scrollTop($("#console")[0].scrollHeight);
		$("#command_line").val("");
	});
});