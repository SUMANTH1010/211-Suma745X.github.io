(function(window) {
    var helloSpeaker = new Object();
    var greeter = "Hello";
    helloSpeaker.speak = function(person) {
        console.log(greeter + " " + person);
    };
    window.helloSpeaker = helloSpeaker;
})(window);
