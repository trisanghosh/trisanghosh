// Helper to get query parameter
function getQueryParam(param) {
  return new URLSearchParams(window.location.search).get(param)?.trim();
}

// DOM ready
window.addEventListener('DOMContentLoaded', () => {
  const name = getQueryParam('name') || "No Name";
  const image = getQueryParam('image') || "fallback.jpg"; // fallback image
  const price = getQueryParam('price') || "₹0";
  const desc = getQueryParam('desc') || "No description available.";

  // Fill product details
  document.getElementById('product-name').textContent = name;
  document.getElementById('product-image').src = image;
  document.getElementById('product-price').textContent = price;
  document.getElementById('product-description').textContent = desc;

  // Animate on load
  document.querySelector('.container').classList.add('fade-in');

  // Set random delivery time
  const deliveryTimeEl = document.getElementById("delivery-time");
  const randomMinutes = Math.floor(Math.random() * 11) + 30;
  deliveryTimeEl.innerHTML = `Delivery in <strong>${randomMinutes} minutes</strong>`;

  // Toast on button click
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
      showToast(`${btn.textContent} clicked!`);
    });
  });
});

// Simple toast notification
function showToast(message) {
  let toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 100);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}