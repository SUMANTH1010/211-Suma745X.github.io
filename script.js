(function() {
    var persons = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var n = 0; n < persons.length; n++) {
        var first = persons[n].charAt(0).toLowerCase();
        if (first === 'j') {
            byeSpeaker.speak(persons[n]);
        } else {
            helloSpeaker.speak(persons[n]);
        }
    }
})();
