(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const leaderboard = document.querySelector("#leaderboard");
const form = document.querySelector("#submit-score");

function renderLeaderboard(doc) {
    let li = document.createElement("li");
    let name = document.createElement("span");
    let score = document.createElement("span");

    li.setAttribute("data-id", doc.id);
    name.textContent = doc.data().name;
    score.textContent = doc.data().score;

    li.appendChild(name);
    li.appendChild(score);

    leaderboard.appendChild(li);
}

function test(params) {
    db.collection("leaderboard")
        .get()
        .then(snapshot => {
            snapshot.docs.forEach(doc => {
                renderLeaderboard(doc);
            });
        });
}

form.addEventListener("submit", evt => {
    evt.preventDefault();
    db.collection('leaderboard').add({
        name: form.name.value,
        score: form.score.value
    })
    form.reset();
});

module.exports = {
    test: test
};

},{}],2:[function(require,module,exports){
$(() => {
    const databaseManager = require("./database-manager");
    let test = databaseManager.test;
    test();

    let totalClicks;
    let cps;
    let currentClicks;

    getCookie("totalClicks", cookie => {
        totalClicks = cookie || 0; //If undefined, set to 0
    });

    $("#total-clicks").text(totalClicks);

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
        document.getElementById("score-box").value = totalClicks;
    }

    function getCPS() {
        setTimeout(function() {
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

},{"./database-manager":1}]},{},[2,1]);
