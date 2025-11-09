// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close menu when nav link clicked
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// Hero slideshow
const slides = document.querySelectorAll(".hero-slideshow .slide");
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

// Slide every 5 seconds
setInterval(nextSlide, 5000);

// Hero CTA button
const heroBtn = document.querySelector(".hero-btn");
if (heroBtn) {
  heroBtn.addEventListener("click", () => {
    alert("🛍️ Site under construction — stay tuned!");
  });
}
// About CTA button
const aboutBtn = document.querySelector(".about-btn");
if (aboutBtn) {
  aboutBtn.addEventListener("click", () => {
    alert("🛍️ Site under construction — stay tuned!");
  });
}


// Latest section CTA buttons
const latestBtns = document.querySelectorAll(".latest-btn");
latestBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("🛍️ Site under construction — stay tuned!");
  });
});

// Card icons alert
const cardIcons = document.querySelectorAll(".card-icons i");
cardIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    alert("🛍️ Site under construction — stay tuned!");
  });
});

// Main CTA button alert
const latestMainBtn = document.querySelector(".latest-main-btn");
if (latestMainBtn) {
  latestMainBtn.addEventListener("click", () => {
    alert("🛍️ Site under construction — stay tuned!");
  });
}

// Fade-in on scroll
const latestCards = document.querySelectorAll(".latest-card");

function fadeInCards() {
  const triggerBottom = window.innerHeight * 0.85;

  latestCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", fadeInCards);
fadeInCards(); // run on load


// Fade-in gallery images on scroll
const galleryItems = document.querySelectorAll(".gallery-item");

function fadeInGallery() {
  const triggerBottom = window.innerHeight * 0.85;

  galleryItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < triggerBottom) {
      item.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", fadeInGallery);
fadeInGallery(); // run on load
