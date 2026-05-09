// ===== TYPING EFFECT =====
const text = "Cybersecurity Enthusiast";
let i = 0;

function typing() {
  if (i < text.length) {
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}
typing();

// ===== SIMPLE SCROLL ANIMATION =====
window.addEventListener("scroll", () => {
  let sections = document.querySelectorAll(".section");

  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 400;

    if (top > offset) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});