const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
  "HẠNH PHÚC để giữ tâm hồn bạn được ngọt ngào",
  "THỬ THÁCH để giữ bạn luôn kiên nhẫn",
  "MUỘN PHIỀN để giữ bạn thật sự tỉnh táo",
  "HY VỌNG để cho bạn được hạnh phúc",
  "THẤT BẠI để bạn mãi khiêm nhường",
  "THÀNH CÔNG để giữ bạn mãi nhiệt tâm",
  "BẠN BÈ để bạn được an ủi",
  "VẬT CHẤT để đáp ứng các nhu cầu vật chất của bạn",
  "NHIỆT TÌNH để bạn cho đời thêm hân hoan",
  "NIỀM TIN để xua tan những thất vọng",
];

const typingDelay = 80;
const erasingDelay = 50;
const newTextDelay = 2000;

let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 2000);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});
