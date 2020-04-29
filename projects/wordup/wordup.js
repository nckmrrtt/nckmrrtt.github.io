
//TODO more reasonable words
// current request is just nouns that appear in a moderate amount of corpuses. corpi??
word_url = "http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=9000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";

definition_url_start = "http://api.wordnik.com:80/v4/word.json/";
definition_url_end = "/definitions?limit=1&includeRelated=false&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";

prev_word = "";
word = "";
definition = "";

function say(msg, delay) {
    if (!msg) {
        $('<p><br></p>').appendTo("#display");
    } else {
        if (!delay) var delay = 1;
        $('<p>' + String(msg) + '</p>').appendTo("#display").fadeIn(delay * 1000);
    }
};

function draw() {

    // clear everything
    $("#display").empty();
    $("#input_word").val("");

    // redraw everything
    say(definition + " (" + word.length + " letters)");
    $("#score").html(score);
    $("#guesses").html(guesses);
    $("#prev_word").html(prev_word);
}

function new_game() {

    new_word();
    
    score = 0;
    guesses = 0;

};

function new_word() {

    debugger;
    prev_word = word;

    word = "";
    definition = "";

    //event.preventDefault(); // To prevent following the link

    //retrieve word
    $.get( word_url, function( data ) {
        // say ("word loaded: " + data.word);
        word = data.word.toLowerCase();

        //retrieve definition
        $.get( definition_url_start + word + definition_url_end, function( data ) {
            // say ("def loaded: " + data[0].text);
            definition = data[0].text;

            // we call draw here because this is asynchronous
            draw();
        });

    });

};

$(document).ready(function() {

    $("form").submit(guess);

});

//TODO type 'n' for new word, 'g' for new game??
// min word length is 5 so shortcuts are possible
//TODO show first letter of word?
//TODO tweak params to make easier / harder? or have "easy" and "hard" buttons
//TODO sanitize output to remove mention of word

function guess() {

    // careful, this is a global var
    cli_input = $("#input_word").val().toLowerCase();
    
    // check guess
    if (cli_input != "") {
        if (cli_input == "g") {
            new_game();
        } else if (cli_input == "n") {
            new_word();
        } else if (word != "") {
            guesses++;
            if (cli_input == word) {
                score++;
                new_word();
            } else {
                draw();
            }
        }
    }

    $("#input_word").val("");
    
};




new_game();