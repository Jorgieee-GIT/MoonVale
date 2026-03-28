let cart = [];

function addToCart(item) {
  cart.push(item);
  document.getElementById('cartCount').innerText = cart.length;
  renderCart();
}

function toggleCart() {
  let modal = document.getElementById('cartModal');
  modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

function renderCart() {
  let list = document.getElementById('cartItems');
  list.innerHTML = '';
  cart.forEach(i => {
    let li = document.createElement('li');
    li.innerText = i;
    list.appendChild(li);
  });
}

function openDiscord() {
  window.open('https://discord.gg/moonvale', '_blank');
}

function copyIP(type) {
  let text = "";

  if (type === 'bedrock') {
    text = document.querySelector('.ip-stack .ip:nth-child(1) b').innerText;
  } else if (type === 'bedrockPort') {
    text = document.querySelector('.ip-stack .ip:nth-child(2) b').innerText;
  } else if (type === 'java') {
    text = document.querySelector('.ip-java b').innerText;
  }

  navigator.clipboard.writeText(text).then(() => {
    showToast("\"" + text + "\" copied!");
  });
}

// Toast notification
function showToast(message) {
  // Remove existing toast if any
  let existing = document.querySelector('.toast');
  if (existing) existing.remove();

  // Create new toast
  let toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<img src="assets/img/moonvale-logo-bgr.png" alt="logo">${message}`;
  document.body.appendChild(toast);

  // Animate in
  setTimeout(() => toast.classList.add('show'), 50);

  // Animate out after 2 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}