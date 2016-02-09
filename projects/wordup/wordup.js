
//TODO more reasonable words
// current request is just nouns from a moderate amount of corpuses. corpi??
word_url = "http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=9000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";

definition_url_start = "http://api.wordnik.com:80/v4/word.json/";
definition_url_end = "/definitions?limit=1&includeRelated=false&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";

function say(msg, delay) {
    if (!msg) {
        $('<p><br></p>').appendTo("#display"); //TODO ytf doesn't this work
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
    say(definition);
    $("#score").html(score);
    $("#guesses").html(guesses);
}

function new_game() {

    $("#input_word").val("");
    
    word = "";
    definition = "";

    new_word();
    
    score = 0;
    guesses = 0;

};

function new_word() {

    $("#input_word").val("");

    //event.preventDefault(); // To prevent following the link

    //retrieve word
    $.get( word_url, function( data ) {
        // say ("word loaded: " + data.word);
        word = data.word;

        //retrieve definition
        $.get( definition_url_start + word + definition_url_end, function( data ) {
            // say ("def loaded: " + data[0].text);
            definition = data[0].text;

            // we call draw here because this is asynchronous
            draw();
        });

    });
    

};

//TODO type 'n' for new word, 'g' for new game??
//TODO show first letter of word?
//TODO tweak params to make easier / harder? or have "easy" and "hard" buttons
//TODO sanitize output to remove mention of word

$(document).ready(function() {

    new_game();

    $("form").submit(function() {

        // careful, this is a global var
        cli_input = $("#input_word").val().toLowerCase();

        $('<p class="text-left" style="color:green" id="input">' + cli_input + '</p>').appendTo("#display").fadeIn(1 * 1000);
        
        // check guess
        if (cli_input != "" && cli_input == word) {
            score++;
            new_word();
        }
        guesses++;

        draw();

    });

});