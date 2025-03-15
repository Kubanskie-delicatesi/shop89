let cart = [];

function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
        <div class="product">
            <div class="products-card">
                <div class="products-card-logo">
                  <img src="${product.img}" alt="Logo">
                </div>
                <div class="product-card-info">
                    <p>${product.name}</p>
                    <form action="tel:89999999999">
                        <button>Заказать</button>
                    </form>
                </div>
            </div>
        </div>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    document.getElementById('cart-count').innerText = cart.length;
}

document.getElementById('search').addEventListener('input', function (e) {
    const query = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
    displayProducts(filteredProducts);
});


displayProducts(products);
