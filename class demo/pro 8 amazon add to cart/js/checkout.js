import { cart, removeFromCart, updateCartQuantity } from "../data/cart.js";
import { products } from "../data/products.js";

updateCartQuantity(".js-total-quantity");
let cartItemHtml = "";

cart.forEach((cartItem) => {
  const productId = cartItem.productId;

  let matchingItem;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingItem = product;
    }
  });
  //   console.log(matchingItem);

  cartItemHtml += `<div class="cart-item-container  
                js-cart-item-container-${matchingItem.id}">          
              <div class="delivery-date">Delivery date: Tuesday, June 21</div>

              <div class="cart-item-details-grid">
                <img class="product-image" src="${matchingItem.image}" />

                <div class="cart-item-details">
                  <div class="product-name">${matchingItem.name}</div>
                  <div class="product-price">$${(matchingItem.priceCents * 100).toFixed(2)}</div>
                  <div class="product-quantity">
                    <span> Quantity: <span class="quantity-label">${cartItem.quantity}</span> </span>
                    <span class="update-quantity-link link-primary js-update-link" data-product-id=${matchingItem.id}> Update </span>
                    <input class="quantity-input">
                    <span class="save-quantity-link link-primary">Save</span>
                    
                    <span class="delete-quantity-link link-primary js-delete-link" data-product-id=${matchingItem.id}> Delete </span>
                  </div>
                </div>

                <div class="delivery-options">
                  <div class="delivery-options-title">Choose a delivery option:</div>
                  <div class="delivery-option">
                    <input type="radio" checked class="delivery-option-input" name="delivery-option-${matchingItem.id}" />
                    <div>
                      <div class="delivery-option-date">Tuesday, June 21</div>
                      <div class="delivery-option-price">FREE Shipping</div>
                    </div>
                  </div>
                  <div class="delivery-option">
                    <input type="radio" class="delivery-option-input" name="delivery-option-${matchingItem.id}" />
                    <div>
                      <div class="delivery-option-date">Wednesday, June 15</div>
                      <div class="delivery-option-price">$4.99 - Shipping</div>
                    </div>
                  </div>
                  <div class="delivery-option">
                    <input type="radio" class="delivery-option-input" name="delivery-option-${matchingItem.id}" />
                    <div>
                      <div class="delivery-option-date">Monday, June 13</div>
                      <div class="delivery-option-price">$9.99 - Shipping</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
});

document.querySelector(".js-order-summary").innerHTML = cartItemHtml;

document.querySelectorAll(".js-delete-link").forEach((link) => {
  link.addEventListener("click", () => {
    const productId = link.dataset.productId;
    removeFromCart(productId);
    // console.log(cart);
    const container = document.querySelector(`.js-cart-item-container-${productId}`);

    container.remove();
    updateCartQuantity(".js-total-quantity");
  });
});

document.querySelectorAll(".js-update-link").forEach((link) => {
  link.addEventListener("click", () => {
    const productId = link.dataset.productId;

    console.log(productId);
    // const container = document.querySelector(`.js-cart-item-container-${productId}`);
    // container.remove();
    // updateCartQuantity(".js-total-quantity");
  });
});