(function(window) {
    var byeSpeaker = new Object();
    var greet = "Good Bye";
    Bye.speak = function speak(person) {
        console.log(greet + " " + person);
    };
    window.byeSpeaker = byeSpeaker;
})(window);
