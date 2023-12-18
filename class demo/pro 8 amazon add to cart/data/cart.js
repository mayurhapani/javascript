export const cart = JSON.parse(localStorage.getItem("cart")) || [];

export function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId, productQuantity) {
  let matchingItem;

  cart.forEach((cartProduct) => {
    if (productId === cartProduct.productId) {
      matchingItem = cartProduct;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += productQuantity;
  } else {
    cart.push({
      productId: productId,
      quantity: productQuantity,
    });
  }
  saveToStorage();
}
