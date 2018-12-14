$(() => {

    let totalClicks;
    getCookie("totalClicks", cookie => {
        totalClicks = cookie || ""; //If undefined, set to ""
    })

    $("#total-clicks").innerHTML = totalClicks;
    let cps = $("#cps");
    let currentClicks = 0;

    const bruhAudio = new Audio("/resources/bruh.mp3");

    getCPS();
    function onClick() {
        bruhAudio.play();
        updateClicks();
    }

    function updateClicks() {
        currentClicks++;
        totalClicks++;
        $("#total-clicks").innerHTML = totalClicks;
        document.cookie = "totalClicks=" + totalClicks;
    }

    function getCPS() {
        setTimeout(function () {
            $("#cps").innerHTML = currentClicks;
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

        callback(result);
    }
})
