//const db = require("./databaseManager");

$(() => {
    let totalClicks;
    getCookie("totalClicks", cookie => {
        totalClicks = cookie || 0; //If undefined, set to 0
    })

    $("#total-clicks").text(totalClicks);
    let cps = $("#cps");
    let currentClicks = 0;

    const bruhAudio = new Audio("/resources/bruh.mp3");

    getCPS();
    function onClick() {
        bruhAudio.play();
        updateClicks();
    }
    $("#bruh-button").click(onClick);

    function updateClicks() {
        currentClicks++;
        totalClicks++;
        $("#total-clicks").text(totalClicks);
        document.cookie = "totalClicks=" + totalClicks;
    }

    function getCPS() {
        setTimeout(function () {
            $("#cps").text(currentClicks);
            currentClicks = 0;
            getCPS();
        }, 1000);
    }

    // Maybe make it promise based?
    function getCookie(cname, callback) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);

        // Note: there's no check in place to decide whether this will return more than one cookie
        // so hopefully, it'll just return one lol
        let result = decodedCookie.split(";").filter(val => {
            val = val.trim(); // gets rid of whitespacing
            return val.startsWith(cname);
        });

        callback(result.toString().split("=")[1]);
    }
});
