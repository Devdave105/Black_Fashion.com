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


// Fade-in gallery on scroll
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
fadeInGallery();

// CTA button alert
const galleryBtn = document.querySelector(".gallery-btn");
if (galleryBtn) {
  galleryBtn.addEventListener("click", () => {
    alert("🖼️ Full gallery coming soon — site under construction!");
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".review-card");
  const dots = document.querySelectorAll(".dot");
  const reviewsBtn = document.querySelector(".reviews-btn");
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      slide.style.zIndex = 0;
    });
    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");
    slides[index].style.zIndex = 1;
    dots[index].classList.add("active");
  }

  showSlide(current);

  // Auto-slide every 5 seconds
  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 5000);

  // Dots click
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      current = i;
      showSlide(current);
    });
  });

  // CTA button alert
  if (reviewsBtn) {
    reviewsBtn.addEventListener("click", () => {
      alert("📝 More reviews coming soon — site under construction!");
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".count");
  let started = false; // Ensure animation runs once

  function animateCounters() {
    if (started) return;

    const statsSection = document.getElementById("stats");
    const sectionTop = statsSection.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.8;

    if (sectionTop < triggerPoint) {
      started = true;

      counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        let current = 0;
        const increment = Math.ceil(target / 200); // speed

        setTimeout(() => { // Wait 3 seconds before counting
          const updateCounter = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.textContent = target;
              clearInterval(updateCounter);
            } else {
              counter.textContent = current;
            }
          }, 10); // interval for smooth counting
        }, 3000); // 3 seconds delay
      });
    }
  }

  window.addEventListener("scroll", animateCounters);
  animateCounters(); // check on load
});
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent actual form submission
      alert("📨 Thank you! Your message has been sent. Site is under construction.");
      contactForm.reset();
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const newsCards = document.querySelectorAll(".news-card");
  const newsButtons = document.querySelectorAll(".news-btn");

  // Fade-in on scroll
  function fadeInNews() {
    const triggerBottom = window.innerHeight * 0.85;
    newsCards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if(cardTop < triggerBottom) {
        card.classList.add("fade-in");
      }
    });
  }

  window.addEventListener("scroll", fadeInNews);
  fadeInNews(); // run on load

  // CTA button alert
  newsButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("📰 Article preview not available — site under construction!");
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const newsCards = document.querySelectorAll(".news-card");
  const newsButtons = document.querySelectorAll(".news-btn");

  // Fade-in on scroll
  function fadeInNews() {
    const triggerBottom = window.innerHeight * 0.85;
    newsCards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if(cardTop < triggerBottom) {
        card.classList.add("fade-in");
      }
    });
  }

  window.addEventListener("scroll", fadeInNews);
  fadeInNews(); // run on load

  // CTA button alert
  newsButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("📰 Article preview not available — site under construction!");
    });
  });

  // Mobile tap toggle
  function isMobile() {
    return window.innerWidth <= 768;
  }

  newsCards.forEach(card => {
    card.addEventListener("click", () => {
      if(isMobile()) {
        const content = card.querySelector(".news-content");
        content.style.opacity = content.style.opacity === "1" ? "0" : "1";
      }
    });
  });
});
