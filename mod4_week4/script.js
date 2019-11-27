
(function() {
    var names = ["yaakov", "john", "jen", "jason ", "Paul", "frank ", "larry ", "paula ", "laura ", "jim "];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeeker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
