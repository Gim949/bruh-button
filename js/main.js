$(() => {
    let totalClicks;
    getCookie("totalClicks", cookie => {
        totalClicks = cookie || 0; //If undefined, set to 0
    })

    $("#total-clicks").text(totalClicks);
    let cps = $("#cps");
    let currentClicks = 0;

    getCPS();
    $("#bruh-button").click(() => {
        const origBruh = $("#bruh-audio");
        const newBruh = origBruh.clone();
        newBruh.get(0).play();
        updateClicks();
    });

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
