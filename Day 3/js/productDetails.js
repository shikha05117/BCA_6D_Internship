// productDetails.js

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");
    const products = document.querySelectorAll(".product-container");

    products.forEach(product => {
        product.style.display = "none";
        if (product.id === productId) {
            product.style.display = "block";
        }
    });
});
