var count = new Date("Jan 1, 2023 00:00:00").getTime();

var x = setInterval(() => {
  var now = new Date().getTime();
  var time = count - now;

  var days = Math.floor(time / (1000 * 60 * 60 * 24));
  var hour = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((time % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;

  if (days < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "H";
    document.getElementById("hour").innerHTML = "P";
    document.getElementById("minute").innerHTML = "N";
    document.getElementById("second").innerHTML = "Y";
    window.location = "phao_hoa/phao_hoa/index.html";
  }
  // if (seconds <= 38 && days == 0 && hour == 0 && minutes == 0) {
  //   clearInterval(x);
  //   window.location = "/video.html";
  // }
}, 1000);
