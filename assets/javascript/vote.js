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
  window.open("https://discord.gg/moonvale", "_blank");
}