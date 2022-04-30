(function(window) {
    var Hello = new Object();
    var greeter = "Hello";
    Hello.speak = function(person) {
        console.log(greeter + " " + person);
    };
    window.Hello = Hello;
})(window);
