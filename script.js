// Navbar Transition on Scroll
const navbar = document.getElementById('navbar');
window.onscroll = function () {
  if (window.scrollY > 0) {
    navbar.classList.remove('transparent');
    navbar.classList.add('solid');
  } else {
    navbar.classList.add('transparent');
    navbar.classList.remove('solid');
  }
};

// Smooth Scroll for Navbar Links
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const sectionId = this.getAttribute('href').substring(1);
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Carousel Slide Effect
let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

function showSlide(index) {
  images.forEach((image, i) => {
    image.classList.remove('previous', 'next', 'active');
    if (i === index) {
      image.classList.add('active');
    } else if (i === (index - 1 + totalImages) % totalImages) {
      image.classList.add('previous');
    } else if (i === (index + 1) % totalImages) {
      image.classList.add('next');
    }
  });
}

function nextSlide() {
  currentImageIndex = (currentImageIndex + 1) % totalImages;
  showSlide(currentImageIndex);
}

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);

// Initialize first slide on page load
showSlide(currentImageIndex);

// Transaction Modal Functions
function openModal(productName, productPrice) {
  document.getElementById('modal').style.display = 'flex';
  document.getElementById('modal-product-name').textContent = productName;
  document.getElementById('modal-product-price').textContent = productPrice;
  document.getElementById('total-price').textContent = productPrice;
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

function updateTotal() {
  const quantity = document.getElementById('quantity').value;
  const price = parseFloat(document.getElementById('modal-product-price').textContent);
  document.getElementById('total-price').textContent = (quantity * price).toFixed(2);
}

function openPaymentModal() {
  document.getElementById('modal').style.display = 'none';
  document.getElementById('paymentModal').style.display = 'flex';
}

function confirmTransaction(paymentMethod) {
  document.getElementById('paymentModal').style.display = 'none';
  document.getElementById('successModal').style.display = 'flex';
}

function closeAllModals() {
  document.getElementById('successModal').style.display = 'none';
}
