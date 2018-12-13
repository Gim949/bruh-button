var cps = document.getElementById('cps');
if(getCookie('totalClicks') == '') {
  var totalClicks = 0;
  document.getElementById('total-clicks').innerHTML = 0;
} else {
  var totalClicks = getCookie('totalClicks');
  document.getElementById('total-clicks').innerHTML = totalClicks;
}
var currentClicks = 0;
getCPS();
function onClick() {
  var bruhAudio = new Audio('bruh.mp3');
  bruhAudio.play()
  currentClicks++;
  totalClicks++;
  document.getElementById('total-clicks').innerHTML = totalClicks;
  document.cookie = 'totalClicks=' + totalClicks;
}
function getCPS() {
  setTimeout(function() {
    document.getElementById('cps').innerHTML = currentClicks;
    currentClicks = 0;
    getCPS();
  }, 1000);
}
function getCookie(cname) {
  var name = cname + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}
