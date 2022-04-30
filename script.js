(function() {
    var persons = ["Cody", "Clive", "James", "Jansen", "Ash", "Viola", "Harry", "Jake", "Jimmy", "John"];
    for (var n = 0; n < persons.length; n++) {
        var first = persons[n].charAt(0).toLowerCase();
        if (first === 'j') {
            Bye.speak(persons[n]);
        } else {
            Hello.speak(persons[n]);
        }
    }
})();
