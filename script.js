// Typing animation
const text = "Aspiring Mechatronics Engineer | Coder | Innovator";
let i = 0;
const speed = 50;
const introText = document.getElementById("introText");

function typeWriter() {
  if (i < text.length) {
    introText.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.1 });

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Dark mode
document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
