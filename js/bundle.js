(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//const db = require("./databaseManager");

let onClick;
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
    onClick = () => {
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

},{}]},{},[1]);
