document.addEventListener("DOMContentLoaded", () => {
  const productContainer = document.querySelector(".product-container");
  const seeMoreBtn = document.getElementById("see-more-btn");

  let visibleCount = 6;
  const allCards = Array.from(productContainer.children);

  const showProducts = () => {
    allCards.forEach((card, index) => {
      card.style.display = index < visibleCount ? "block" : "none";
    });
  };

  seeMoreBtn.addEventListener("click", () => {
    visibleCount += 2;

    if (visibleCount >= allCards.length) {
      seeMoreBtn.style.display = "none";
    }

    showProducts();
  });

  showProducts();
});
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search_input");
  const productCards = document.querySelectorAll(".product-card");

  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();

    productCards.forEach(card => {
      const productName = card.dataset.name.toLowerCase();
      if (productName.includes(searchTerm)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});




// Smooth Scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Fade-in on scroll using Intersection Observer
const fadeInElements = document.querySelectorAll('.fade-in');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const fadeInOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

fadeInElements.forEach(el => {
  fadeInOnScroll.observe(el);
});