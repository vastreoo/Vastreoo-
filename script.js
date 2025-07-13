
let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(product + " added to cart!");
}

window.onload = function () {
  if (document.getElementById("cart-items")) {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsDiv = document.getElementById("cart-items");
    let total = 0;
    items.forEach(item => {
      const div = document.createElement("div");
      div.innerText = item.product + " - ₹" + item.price;
      cartItemsDiv.appendChild(div);
      total += item.price;
    });
    document.getElementById("total").innerText = total;
  }
};
