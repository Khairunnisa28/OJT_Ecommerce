document.addEventListener("DOMContentLoaded", function () {
  const promoContainer = document.querySelector("#promoCarousel .carousel-inner");
  
  const cart = [];

  const promos = [
    { image: "https://www.harvestcakes.com/media/thumbnails/main_banner/2025/2/2/mzg6v98jt29emghmhymjbx_size_1161x463_webp.webp", alt: "Promo Diskon 20%" },
    { image: "https://www.harvestcakes.com/media/thumbnails/main_banner/2025/2/1/mfdi6rx9m38v2vdce4nl7m_size_1161x463_webp.webp", alt: "Promo Beli 1 Gratis 1" },
    { image: "https://harvestcakes.com/media/thumbnails/main_banner/2022/9/30/xfouu8ejk6jwwkcgltwfte_size_1161x463.jpg", alt: "Promo Cashback 50%" },
    { image: "https://production-harvest-web.stamps.id/media/thumbnails/main_banner/2023/12/20/nr5snzcrxduhwqalfnsuao_size_1161x463.jpg", alt: "Promo Cashback 50%" }
  ];

  const products = [
    {id: 1, name: "Black Forest Doughnut", category: "Doughnuts", price: 15000, image: "https://www.harvestcakes.com/omni-media/thumbnails/product_photo/2024/10/9/wrmyvmjpzeynmwjspnyz3m_size_480_webp.webp"},
    {id: 2, name: "Cookie and Cream Doughnut", category: "Doughnuts", price: 15000, image: "https://www.harvestcakes.com/omni-media/thumbnails/product_photo/2024/10/9/kvxj5r4lwyvaazz7c95g9v_size_480_webp.webp"},
    {id: 3, name: "Sugary Donut New", category: "Doughnuts", price: 15000, image: "https://www.harvestcakes.com/omni-media/thumbnails/product_photo/2024/10/9/yurvezjduunkfrsdpbpqvs_size_480_webp.webp"},
    {id: 4, name: "Chocolate Doughnut", category: "Doughnuts", price: 15000, image: "https://www.harvestcakes.com/omni-media/thumbnails/product_photo/2024/10/9/2tx95sj74mtntb9wysgzhy_size_480_webp.webp"},
    {id: 5, name: "Red Velvet Doughnut", category: "Doughnuts", price: 15000, image: "https://www.harvestcakes.com/omni-media/thumbnails/product_photo/2024/10/9/abpvwappym6obpgdji6mzc_size_480_webp.webp"},
    {id: 6, name: "Avocado Doughnut", category: "Doughnuts", price: 15000, image: "https://www.harvestcakes.com/omni-media/thumbnails/product_photo/2024/10/9/pemjezvuquec7zwtp3ndmw_size_480_webp.webp"},
    {id: 7, name: "Cheese Doughnut", category: "Doughnuts", price: 15000, image: "https://www.harvestcakes.com/omni-media/thumbnails/product_photo/2024/10/9/s2rnjyh4o4gnb394ftvbfv_size_480_webp.webp"},
    {id: 8, name: "Peanut Butter Doughnut", category: "Doughnuts", price: 15000, image:"https://www.harvestcakes.com/omni-media/thumbnails/product_photo/2024/10/9/x83od9dqca2wmfa7wpxgod_size_480_webp.webp"},
    {id: 10, name: "Pistachio Doughnut", category: "Doughnuts", price: 15000, image: "https://www.harvestcakes.com/omni-media/thumbnails/product_photo/2024/10/9/jvcgphgq4zpqz33yi3zvwq_size_480_webp.webp"},
    {id: 11, name: "Lapis Signature", category: "Signature Cakes", price: 630000, image: "https://www.harvestcakes.com/omni-media/thumb/product_photo/2024/4/30/ndonpbunqypgvqpq4znstk_size_480_webp.webp"},
    {id: 12, name: "Special Signature Cake Regular Round", category: "Signature Cakes", price: 415000, image: "https://www.harvestcakes.com/omni-media/thumb/product_photo/2023/3/27/h9vdeuuu4z4cmb8u6qjonn_size_480_webp.webp"},
    {id: 13, name: "Classic Mix Signature Regular Square", category: "Signature Cakes", price: 395000, image:"https://www.harvestcakes.com/omni-media/thumb/product_photo/2023/3/27/kuocuxhvgyliur2rhfysmv_size_480_webp.webp"},
    {id: 14, name: "Cheesecake Signature Regular Square", category: "Signature Cakes", price: 395000, image: "https://www.harvestcakes.com/omni-media/thumb/product_photo/2023/3/27/bk9pyht5ddp5ofdyq5xt9f_size_480_webp.webp"},
    {id: 15, name: "Deluxe Mix Signature Regular Square", category: "Signature Cakes", price: 395000, image: "https://www.harvestcakes.com/omni-media/thumb/product_photo/2023/3/27/eqwzwzyzwlsa8hp38xr424_size_480_webp.webp"},
    {id: 16, name: "Mix Twin Signature Small Rectangle", category: "Signature Cakes", price: 240000, image: "https://www.harvestcakes.com/omni-media/thumb/product_photo/2023/3/27/zmsmnt95wjxxoyqjsksxwb_size_480_webp.webp"},
    {id: 17, name: "Chocolate Twin Signature Small Rectangle", category: "Signature Cakes", price: 240000,image: "https://www.harvestcakes.com/omni-media/thumb/product_photo/2023/3/27/4p8rv4q3msxiolsfcckr8o_size_480_webp.webp"},
    {id: 18, name: "Tissue Bread", category: "Bread & Pastry", price: 25000, image: "https://www.harvestcakes.com/omni-media/thumbnails/product_photo/2024/6/14/3fvsunfvwhzbbpqmx6cvtp_size_480_webp.webp"},
    {id: 19, name: "Chocolate Tissue Bread", category: "Bread & Pastry", price: 25000, image: "https://www.harvestcakes.com/omni-media/thumbnails/product_photo/2024/6/14/c2rz5bjymvi8mvhb5waucr_size_480_webp.webp"},
    {id: 20, name: "Salt Bread Bolognese", category: "Bread & Pastry", price: 20000, image:"https://www.harvestcakes.com/omni-media/thumb/product_photo/2024/2/16/3birrhk9qjfnwu8hi2zec5_size_480_webp.webp"},
    {id: 21, name: "Salt Bread Smoke n Cheese", category: "Bread & Pastry", price: 20000, image: "https://www.harvestcakes.com/omni-media/thumb/product_photo/2024/2/16/be2klp4yaxnsg2kanbogev_size_480_webp.webp"},
    {id: 22, name: "Le Supreme Croissant", category: "Bread & Pastry", price: 25000, image: "https://www.harvestcakes.com/omni-media/thumb/product_photo/2022/9/30/hyvaxqwqapqo8mukohamby_size_250_webp.webp",},
    {id: 23, name: "Egg tart", category: "Bread & Pastry", price: 18000, image: "https://www.harvestcakes.com/omni-media/thumb/variant_photos/2022/6/10/W5FyXQe3us58qHxenxdsvn_size_480_webp.webp"},
    {id: 24, name: "Molten Blueberry Cheese Tart", category: "Bread & Pastry", price: 35000, image: "https://www.harvestcakes.com/omni-media/thumbnails/product_photo/2024/5/20/vkqriwqwwyu7rkoxtvuz2q_size_480_webp.webp"},
    {id: 25,name: "Molten Cheese Tart", category: "Bread & Pastry", price: 35000, image: "https://www.harvestcakes.com/omni-media/thumbnails/product_photo/2024/5/20/gj29gcnq4e8pqft2khdbil_size_480_webp.webp"},
    {id: 26, name: "Molten Chocolate Tart", category: "Bread & Pastry", price: 35000, image: "https://www.harvestcakes.com/omni-media/thumbnails/product_photo/2024/5/20/2axqyhtta3r2m9fay9rdte_size_480_webp.webp",},
    {id: 27, name: "Molten Smoked Beef", category: "Bread & Pastry", price: 35000, image: "https://www.harvestcakes.com/omni-media/thumbnails/product_photo/2024/5/20/whoqzyz84mfnlyqysukptn_size_480_webp.webp"},
  ];

  const productList = document.getElementById("product-list");
  const categoryFilter = document.getElementById("category-filter");

  promoContainer.innerHTML = promos
  .map((promo, index) => `
    <div class="carousel-item ${index === 0 ? "active" : ""}">
      <img src="${promo.image}" class="d-block w-100" alt="${promo.alt}">
    </div>
  `)
  .join("");

  function displayProducts(filteredProducts) {
    productList.innerHTML = "";
    filteredProducts.forEach(product => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");

      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">Rp${product.price.toLocaleString()}</p>
        <div class="quantity-container">
            <button class="quantity-btn" onclick="changeQuantity(${product.id}, -1)">-</button>
            <input type="number" class="quantity-input" id="qty-${product.id}" min="1" value="1" readonly>
            <button class="quantity-btn" onclick="changeQuantity(${product.id}, 1)">+</button>
        </div>
        <button class="order-button" onclick="placeOrder(${product.id})">Order</button>
      `;

      productList.appendChild(productCard);
    });
  }

  window.changeQuantity = function (id, amount) {
    const qtyInput = document.getElementById(`qty-${id}`);
    let qty = parseInt(qtyInput.value) + amount;
    qtyInput.value = qty < 1 ? 1 : qty;
  };

  window.placeOrder = function (id) {
    const product = products.find(p => p.id === id);
    const quantity = parseInt(document.getElementById(`qty-${id}`).value);
    alert(`product added to cart! \n\nProduct: ${product.name} \nQuantity: ${quantity}`);
  };

  categoryFilter.addEventListener("change", function () {
    const selectedCategory = categoryFilter.value;
    displayProducts(selectedCategory === "all" ? products : products.filter(product => product.category === selectedCategory));
  });
  document.querySelectorAll(".order-btn").forEach(button => {
    button.addEventListener("click", function () {
      const productId = parseInt(this.dataset.id);
      const product = products.find(p => p.id === productId);
      if (product) addToCart(product);
    });
  });
  
  displayProducts(products);
});
