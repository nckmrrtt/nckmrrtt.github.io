//////// AVENTURE GAME!!!!! /////////

// reborn in a fiery ball of javascript

// (c) nick merritt 2015

// send complaints, etc to nicholasjmerritt@gmail.com





////// global variables  //////

current_room = null;	// Room object, will change with every visit()
player = null;			// Player object, will rarely change  
items = [];				// Current items in scope for inspecting / picking up, etc
		
// Strings, will change with every $("#command_line").val()
cli_tokens = [];
verb = '';
noun = '';



////// modifying builtin types ooohoohoooo //////

Array.prototype.compact = function() {
  return this.filter(function(x) {
    return x !== null && x !== undefined;
  });
};



////// utility functions //////

function say(msg, delay) {
	if (!msg) {
		$('<p><br></p>').appendTo("#console");
		return;
	}
	if (!delay) var delay = 1;
	$('<p>' + String(msg) + '</p>').appendTo("#console").fadeIn(delay * 1000);
}

function random_choice(input_array) {
	return input_array[Math.floor(Math.random() * input_array.length)];
}

function visit(room) {
	say("You enter " + room.epithet + ".");
	say(room.backstory);
	current_room = room;
}

function verbis() {
	for (var i = 0; i < arguments.length; ++i)
		if (verb == arguments[i])
			return true;
	return false;
}

function nounis() {
	for (var i = 0; i < arguments.length; ++i)
		if (noun == arguments[i])
			return true;
	return false;
}


////// console utility functions //////

function clc() {
	$("#console").empty();
}

function death() {
	say("You die a horrible and painful death.", 1);
	$("#container").fadeOut(5000, function() {
		//$('#footer').empty(); //TODO copyright or no?
		$('#footer').prepend("<p>bwahahahahaha u suck</p>");
	});
}


////// word / phrase functions //////

function random_adj() {
	return random_choice(['Purple', 'Spotted', 'Gnarled', 'Rusty']);
}

function random_noun() {
	return random_choice(['Stone', 'Bucket', 'Goblin', 'Hangnail']);
}

function tavern_epithet() {
	return "The " + random_adj() + " " + random_noun();
}





////// TODO: itemz //////



////// Basic classes //////

// base container class that contains things. used for people and rooms.

var Container = function (epithet) {
	
	this.epithet = epithet;
	this.backstory = '';
	this.items = [];

};

Container.prototype.setItems = function (items) {
	this.items = items;
}

Container.prototype.getItems = function () {
	return this.items;
}

Container.prototype.setBackstory = function (backstory) {
	this.backstory = backstory;
}


//return true if we actually gained something
Container.prototype.gain = function (item) {
	if (item !== null) {
		this.items.push(item);
		return true;
	} else {
		return false;
	}
}

Container.prototype.lose = function (item) {
	return (this.items.indexOf(item) > -1) ? this.items.splice(this.items.indexOf(item), 1) : null;
}



////// person class and list of people //////

//Person inherits from Container
var Person = function (epithet) {
	Container.call(this,epithet);
};

Person.prototype = Object.create(Container.prototype);
Person.prototype.constructor = Person;

Person.prototype.hi = function () {
	say("hello, " + this.epithet + "!");
}

//returns true if we successfully grabbed the item
Person.prototype.grab = function (item) {
	item = current_room.lose(item);
	return this.gain(item);
}

Person.prototype.drop = function (item) {
	current_room.gain(this.lose(item));
}


var bob = new Person('Bob');
bob.setBackstory("you are a normal person with no special powers.");

var daisuke = new Person('Daisuke');
daisuke.setBackstory("you are a yamabushi, a japanese warrior monk from the 1800s.\n" +
	"you are in the post office, mailing a samurai sword to your friend Takeshi.\n" +
	"also, you have no right arm.");

start_players = [bob, daisuke];




////// room class and list of rooms //////

//Basic "no way out" room
//Inherits from Container
var Room = function (epithet) {
	Container.call(this,epithet);
};

Room.prototype = Object.create(Container.prototype);
Room.prototype.constructor = Room;

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


//DeathRoom inherits from Room
function DeathRoom (epithet) {
	Room.call(this, epithet);
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


//Tavern inherits from Room
function Tavern (epithet) {
	Room.call(this, epithet);
}

Tavern.prototype = Object.create(Room.prototype);
Tavern.prototype.constructor = Tavern;

Tavern.prototype.north = function () {
	visit(yuubinkyoku);
}


//Post Office inherits from DeathRoom
function Yuubinkyoku (epithet) {
	Room.call(this, epithet);
}

Yuubinkyoku.prototype = Object.create(DeathRoom.prototype);
Yuubinkyoku.prototype.constructor = Yuubinkyoku;

Yuubinkyoku.prototype.south = function () {
	visit(tavern);
}



////// List of rooms //////

var tavern = new Tavern(tavern_epithet());
tavern.setBackstory("it's really greasy.");

var yuubinkyoku = new Yuubinkyoku('a japanese post office');
yuubinkyoku.setBackstory("it's filled with deadly jello.");

start_rooms = [tavern, yuubinkyoku];


////// LET THE GAMES BEGIN //////
$(document).ready(function() {

	$("#command_line").fadeIn(1000);

	// careful, these are global vars
	current_room = random_choice(start_rooms);
	player = random_choice(start_players);

	// intro
	say(player.backstory, 1);
	say();
	visit(current_room);
	say();

	$("form").submit(function() {

		// careful, this is a global var
		cli_input = $("#command_line").val().toLowerCase();
		cli_tokens = cli_input.split(" ");
		
		verb = '';
		noun = '';

		if (cli_tokens.length > 0)
			verb = cli_tokens[0];
		if (cli_tokens.length > 1)
			noun = cli_tokens[1];

		say("verb: " + verb);
		say("noun: " + noun);


		// items that are currently "in scope"
		//say(player.getItems());
		//say(current_room.getItems());

		//items = player.getItems().concat(current_room.getItems());
		//say("in scope: " + items);


		// used: ab d fg ijklm opq  tuv xyz 
		//  not:   c e  h     n   rs   w    


		if (verbis("inventory", "i")) {
			say(player.items);
		}

		else if (verbis("grab", "g")) {
			if (noun !== '') {
				if (player.grab(noun)) {
					say("You grabbed a new " + noun);
				} else {
					say("Woops, there's no " + noun + " here...");
				}
			}
		}

		else if (verbis("gain")) {
			if (noun !== '') {
				player.gain(noun);
			}
		}

		else if (verbis("drop")) {
			if (noun !== '') {
				if (player.drop(noun)) {
					say("You dropped yer " + noun + ".");
				} else {
					say("You ain't got no " + noun + ", you fool.");
				}
			}
		}

		else if (verbis("look", "l")) {
			if (nounis("room", "around", current_room.epithet)) {
				say(current_room.items);
			}

			else if (nounis(player.items)) {
				say("ooh, look at this here " + noun);
			}
		}




		////// logistics commands //////

		else if (verbis("help", "h")) {
			clc();
			say("Hello, intrepid traveler.");
			say("Available commands:");
			say("	(h)elp");
			say("	(c)lear");
			say("	(r)estart");
			say();
			say("	(n)orth");
			say("	(s)outh");
			say("	(e)ast");
			say("	(w)est");
			say();
			say("   (g)rab [item]");
			say("   (l)ook [item]");
			say();
			say("(also, feel free to ask questions)");
		}

		else if (verbis("clear", "c")) {
			clc();
		}

		else if (verbis("restart", "r")) {
			location.reload();
		}





		////// directions commands //////

		else if (verbis("north", "n")) {
			current_room.north();
		}

		else if (verbis("south", "s")) {
			current_room.south();
		}

		else if (verbis("east", "e")) {
			current_room.east();
		}

		else if (verbis("west", "w")) {
			current_room.west();
		}







		////// fun stuff / syntax error //////

		else if (verbis("who", "what", "where", "why", "when", "how")) {
			say("stop asking so many stupid questions");
		}

		else if (cli_input !== "") {
			say("oops, can't understand '" + cli_input + "'");
			say();
			say("(you're currently in " + current_room.epithet + ")");
			say();
			say("(type 'help' for help...)", 3);
		}




		//reset cli
		$("#console").scrollTop($("#console")[0].scrollHeight);
		$("#command_line").val("");
	});
});