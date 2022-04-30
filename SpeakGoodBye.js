(function(window) {
    var Bye = new Object();
    var greet = "Good Bye";
    Bye.speak = function speak(person) {
        console.log(greet + " " + person);
    };
    window.Bye = Bye;
})(window);
