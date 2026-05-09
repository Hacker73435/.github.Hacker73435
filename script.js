// ===== TYPING EFFECT (FIXED) =====
const text = "Cybersecurity Enthusiast";
let i = 0;

function typing() {
  const el = document.querySelector(".typing");

  if (i === 0) el.innerHTML = ""; // prevent duplicate text

  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}

typing();


// ===== SCROLL REVEAL ANIMATION (IMPROVED) =====
const sections = document.querySelectorAll(".section");

// set initial state
sections.forEach(sec => {
  sec.style.opacity = "0";
  sec.style.transform = "translateY(50px)";
  sec.style.transition = "0.8s ease";
});

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight - 100;

  sections.forEach(sec => {
    const boxTop = sec.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
});
