
//TODO more reasonable words
word_url = "http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";

function say(msg, delay) {
    if (!msg) {
        $('<p><br></p>').appendTo("#display"); //TODO ytf doesn't this work
    } else {
        if (!delay) var delay = 1;
        $('<p>' + String(msg) + '</p>').appendTo("#display").fadeIn(delay * 1000);
    }
};

function new_game() {

    $("#input_word").val("");
    
    word = "";
    definition = "";

    score = 0;
    guesses = 0;

};

function new_word() {

    $("#input_word").val("");

    //event.preventDefault(); // To prevent following the link
    $.get( word_url, function( data ) {
        say ("word loaded: " + data.word);
        word = data.word;
    });
};

//TODO clc

$(document).ready(function() {

    new_game();

    $("#input_word").fadeIn(1000);

    $("form").submit(function() {

        // careful, this is a global var
        cli_input = $("#input_word").val().toLowerCase();

        $('<p class="text-left" style="color:green" id="input">' + cli_input + '</p>').appendTo("#display").fadeIn(1 * 1000);
        
        // check correctness

        if (cli_input != "" && cli_input == word) {
            score++;
            new_word();
        }

        guesses++;

        //reset cli
        $("#display").scrollTop($("#display")[0].scrollHeight);
        $("#input_word").val("");

    });

    // $("#new_word_button").on("click", function(event) {
    //     event.preventDefault(); // To prevent following the link
    //     $.get( word_url, function( data ) {
    //         alert( "Data Loaded: " + data.word );
    //     });
    // });

    // function new_word(event) {

    //     $("#input_word").val("");
    //     alert("here!");

    //     event.preventDefault(); // To prevent following the link
    //     $.get( word_url, function( data ) {
    //         say ("werd loaded" + data.word );
    //     });
    //     say ("done");
    // };

});