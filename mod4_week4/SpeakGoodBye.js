
(function(window) {
    var byeSpeeker = new Object();
    var speakword = "good bye";
    byeSpeeker.speak = function speak(name) {
        console.log(speakword + "  " + name);
    };
    window.byeSpeeker = byeSpeeker;
})(window);
