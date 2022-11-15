// Possible improvements:
// - Change timeline and volume slider into input sliders, reskinned
// - Change into Vue or React component
// - Be able to grab a custom title instead of "Music Song"
// - Hover over sliders to see preview of timestamp/volume change

const audioPlayer = document.querySelector(".audio-player");
const audio = new Audio("assets/mp3/nhacxuan.mp3");
//credit for song: Adrian kreativaweb@gmail.com
document.addEventListener("keydown", function (event) {
  audio.play();
});

setTimeout(() => {
  audio.play();
}, 2000);
