var clicks = 0;
    function onClick() {
        var bruhAudio = new Audio("bruh.mp3");
        bruhAudio.play()
        clicks += 1;
        document.getElementById("total-clicks").innerHTML = clicks;
    };