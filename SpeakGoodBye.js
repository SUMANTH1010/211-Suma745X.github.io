(function(window) {
    var byeSpeaker = new Object();
    var greet = "Good Bye";
    byeSpeaker.speak = function speak(person) {
        console.log(greet + " " + person);
    };
    window.byeSpeaker = byeSpeaker;
})(window);
