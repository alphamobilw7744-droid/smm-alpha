const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".product");

searchInput.addEventListener("keyup", function () {
  const searchValue = searchInput.value.toLowerCase();

  products.forEach(function (product) {
    const productName = product.querySelector("h2").innerText.toLowerCase();

    if (productName.includes(searchValue)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});