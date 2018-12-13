var cps = document.getElementById("cps");
var totalClicks = document.getElementById("total-clicks");
var count = 0;
var start = 0;
function onClick() {
    var bruhAudio = new Audio("bruh.mp3");
    bruhAudio.play()
    count++;
    start++;
    document.getElementById("total-clicks").innerHTML = start;
};
getCPS();
function getCPS() {
  setTimeout(function() {
    document.getElementById("cps").innerHTML = count;
    count = 0;
    getCPS();
  }, 1000);
}
