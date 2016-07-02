//////// AVENTURE GAME!!!!! /////////
//
// reborn in a fiery ball of javascript
//
// (c) nick merritt 2015
//
// send complaints, etc to nicholasjmerritt@gmail.com

// TODO change the name from AVENTURE to something cool-sounding I found on the internet

// TODO still need better parsing? nah...
//
// verb [noun] is good enough for me



////// global variables  //////

current_room = null;    // Room object, will change with every visit()
player = null;          // Player object, will rarely change
items = [];             // Current items in scope for inspecting / picking up, etc

// Strings, will change with every $("#command_line").val()
cli_tokens = [];
verb = "";
noun = "";

dead = false; //duh



////// modifying builtin types ooohoohoooo //////

Array.prototype.compact = function() {
  return this.filter(function(x) {
    return x !== null && x !== undefined;
});
};



////// utility functions //////

function say(msg, delay) {
    if (!msg || msg == "") {
        msg = "<br>";
    }
    if (!delay) {
        delay = 1;
    }
    $("#console").append("<p>" + String(msg) + "</p>").fadeIn(delay * 1000);
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
    for (var i = 0; i < arguments.length; ++i) {
        if (verb == arguments[i])
            return true;
    }
    return false;
}

function nounis() {
    for (var i = 0; i < arguments.length; ++i) {
        if (noun == arguments[i])
            return true;
    }
    return false;
}


////// console utility functions //////

function clc() {
    $("#console").empty();
}

function death() {
    say("You die a horrible and painful death.", 5);
    dead = true;
    $("#console").fadeOut(7000, function() {
        $("#footer").hide();
        $("#command_line").removeAttr("autofocus");
        $("#command_line").hide();
        $("#spacing").append('<p class="text-center">bwahaha u suck</p>');
    });
}


////// word / phrase functions //////

function random_adj() {
    return random_choice(["Purple", "Spotted", "Gnarled", "Rusty", "Periwinkle"]);
}

function random_noun() {
    return random_choice(["Stone", "Bucket", "Goblin", "Hangnail"]);
}

function tavern_epithet() {
    return "The " + random_adj() + " " + random_noun();
}





////// TODO: itemz //////



////// Basic classes //////

// base container class that contains things. used for people and rooms.

var Container = function (epithet) {

    this.epithet = epithet;
    this.backstory = "";
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
        this.items.push(String(item));
        return true;
    } else {
        return false;
    }
}

Container.prototype.lose = function (item) {
    //say("(tryna lose " + item + " from " + this.epithet + ")");
    return (this.items.indexOf(String(item)) > -1) ? this.items.splice(this.items.indexOf(item), 1) : null;
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
    if (this.gain(item)) {
        say("You grabbed a new " + item);
    } else {
        say("Woops, there's no " + item + " here...");
    }
}

Person.prototype.drop = function (item) {
    if (current_room.gain(this.lose(item))) {
        say("You dropped yer " + noun + ".");
    } else {
        say("You ain't got no " + noun + ", you fool.");
    }
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

Room.prototype.death = function () {
    death();
}

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

Room.prototype.up = function () {
    say("You can't fly, stupid.");
}

Room.prototype.down = function () {
    say("The floor is pretty solid.");
}


//DeathRoom inherits from Room
function DeathRoom (epithet) {
    Room.call(this, epithet);
}

DeathRoom.prototype = Object.create(Room.prototype);
DeathRoom.prototype.constructor = DeathRoom;

DeathRoom.prototype.north = function () {
    this.death();
}

DeathRoom.prototype.south = function () {
    this.death();
}

DeathRoom.prototype.east = function () {
    this.death();
}

DeathRoom.prototype.west = function () {
    this.death();
}




////// List of rooms //////

var tavern = new Room(tavern_epithet());
tavern.setBackstory("it's really greasy.");
tavern.setItems(["beer", "water", "knife", "noodles"]);
tavern.north = function () {
    visit(yuubinkyoku);
}
tavern.east = function () {
    visit(roomEast);
}
tavern.west = function () {
    visit(roomWest);
}
tavern.south = function () {
    visit(roomSouth);
}

var yuubinkyoku = new DeathRoom('a japanese post office');
yuubinkyoku.setBackstory("It's filled with deadly jello.");
yuubinkyoku.setItems(["pickle", "mug", "painting"]);
yuubinkyoku.south = function () {
    visit(tavern);
}

yuubinkyoku.death = function () {
    say("Oh God. The jello... it's everywhere...", 2);
    death();
}

var roomEast = new DeathRoom('a dark room');
//roomE.setBackstory("It's really dark.");
//roomE.setItems(["beer", "water", "knife", "noodles"]);
roomEast.west = function () {
    visit(tavern);
}
var roomWest = new DeathRoom('a dark room');
//roomE.setBackstory("It's really dark.");
//roomE.setItems(["beer", "water", "knife", "noodles"]);
roomWest.east = function () {
    visit(tavern);
}
var roomSouth = new DeathRoom('a dark room');
//roomE.setBackstory("It's really dark.");
//roomE.setItems(["beer", "water", "knife", "noodles"]);
roomSouth.north = function () {
    visit(tavern);
}



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

        if (!dead) {

            // careful, this is a global var
            cli_input = $("#command_line").val().toLowerCase();
            $("#input").removeAttr('id');
            $('<p class="text-left" style="color:green" id="input">' + cli_input + '</p>').appendTo("#console").fadeIn(1 * 1000);
            cli_tokens = cli_input.split(" ");

            verb = '';
            noun = '';

            if (cli_tokens.length > 0)
                verb = cli_tokens[0];
            if (cli_tokens.length > 1)
                noun = cli_tokens[1];

            //say("verb: " + verb);
            //say("noun: " + noun);


            // items that are currently "in scope"
            //say(player.items);
            //say(current_room.items);

            //items = player.getItems().concat(current_room.getItems());
            //say("in scope: " + items);


            //  not: ab   f   jk m opq  t v xyz 
            // used:   cde ghi  l n   rs u w    


            if (verbis("inventory", "i")) {
                say(player.items);
            }

            else if (verbis("grab", "g")) {
                if (noun !== '') {
                    player.grab(noun);
                } else {
                    say("You grasp wildly at nothing.");
                }
            }

            else if (verbis("gain")) {
                if (noun !== '') {
                    player.gain(noun);
                } else {
                    say('"If you risk nothing, you gain nothing" --Bear Grylls');
                }
            }

            else if (verbis("drop", "d")) {
                if (noun !== "") {
                    player.drop(noun);
                } else {
                    say("You drop to the floor and flail wildly.");
                }
            }

            else if (verbis("look", "l")) {
                if (nounis("room", "around", current_room.epithet, '')) {
                    say(current_room.items);
                }

                else if (nounis("self", "me")) {
                    say(player.items);
                }

                else if (nounis(current_room.items)) {
                    say("Ooh, look at that " + noun + ". It's so " + random_adj() + ".");
                }

                else if (nounis(player.items)) {
                    say("Ooh, look at your " + noun + ". It's so " + random_adj() + ".");
                }
            }




            ////// logistics commands //////

            else if (verbis("help", "h")) {
                clc();
                say("Hello, intrepid traveler.");
                say("Available commands:");
                say("(h)elp");
                say("(c)lear");
                say("(r)estart");
                say();
                say("(n)orth");
                say("(s)outh");
                say("(e)ast");
                say("(w)est");
                say();
                say("(g)rab");
                say("(d)rop");
                say("(l)ook");
                say();
                say("(i)nventory");
                say("(there's more... feel free to ask questions)", 3);
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


            //'hidden' direction
            else if (verbis("up", "u")) {
                current_room.up();
            }




            ////// fun stuff / syntax errors //////

            else if (verbis("who", "what", "where", "why", "when", "how")) {
                say("stop asking so many stupid questions");
            }

            else if (verbis("read")) {
                say('"Literature is a hatchet with which we chop at the frozen seas inside us." --Franz Kafka')
            }

            else if (cli_input !== "") {
                $("#input").css('color','red');
                say("oops, can't understand '" + cli_input + "'");
                say();
                say("(type 'help' for help...)", 3);
            }
        }

        //reset cli
        $("#command_line").val("");
        $("#console").scrollTop($("#console")[0].scrollHeight + 100);
    });

    //$("#console").scrollTop($("#console")[0].scrollHeight - 100);
});