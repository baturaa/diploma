// Просмотр картинок
window.addEventListener('DOMContentLoaded', () => {

  const thumbnails = document.querySelectorAll('.sub-image img');
  const mainImage = document.getElementById('mainImage');


  thumbnails.forEach(img => {
    img.addEventListener('click', () => {
      mainImage.src = img.src;
    });
  });
});


window.addEventListener('DOMContentLoaded', () => {
  const thumbnails = document.querySelectorAll('.sub-image img');
  const mainImage = document.getElementById('mainImage');

  thumbnails.forEach(img => {
    img.addEventListener('click', () => {
      mainImage.src = img.src;
    });
  });
});

// Корзина
document.addEventListener("DOMContentLoaded", function () {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const addToCartBtn = document.querySelector(".add-to-cart");
  const sizeButtons = document.querySelectorAll(".size-selector span");
  const cartModal = document.getElementById("cartModal");
  const openCartBtn = document.getElementById("openCartBtn");
  const closeCartBtn = document.getElementById("closeCartBtn");
  const cartItemsList = document.getElementById("cartItemsList");

  let selectedSize = null;

  // Выбор размера
  sizeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      sizeButtons.forEach(b => b.style.backgroundColor = "black");
      btn.style.backgroundColor = "#ffcc00";
      selectedSize = btn.textContent;
    });
  });

  // Обновить отображение корзины
  function updateCartDisplay() {
    cartItemsList.innerHTML = "";

    if (cart.length === 0) {
      cartItemsList.innerHTML = "В корзине пока что ничего нет";
    } else {
      cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 15px;">
            <img src="${item.image}" alt="${item.name}" width="80" style="border-radius: 8px;">
            <div>
              <strong>${item.name}</strong> (размер ${item.size}) — ${item.quantity} шт.<br>
              Цена: ₸${item.price * item.quantity}<br>
              <button class="qty-btn" onclick="changeQuantity(${index}, 1)">+</button>
              <button class="qty-btn" onclick="changeQuantity(${index}, -1)">-</button>
              <button class="remove-btn" onclick="removeFromCart(${index})">Удалить</button>
            </div>
          </div>
        `;
        cartItemsList.appendChild(li);
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  }

  // Добавить в корзину
  addToCartBtn.addEventListener("click", () => {
    if (!selectedSize) {
      alert("Выберите размер перед добавлением в корзину.");
      return;
    }

    const product = {
      name: "Adidas Original Campus",
      size: selectedSize,
      price: 50000,
      quantity: 1,
      image: "images/Adidas original campus.jpg"
    };

    const existing = cart.find(
      (item) => item.name === product.name && item.size === product.size
    );

    if (existing) {
      existing.quantity++;
    } else {
      cart.push(product);
    }

    updateCartDisplay();
    alert("Товар добавлен в корзину!");
  });

  // Открыть корзину
  openCartBtn.addEventListener("click", () => {
    cartModal.style.display = "block";
    updateCartDisplay();
  });

  // Закрыть корзину
  closeCartBtn.addEventListener("click", () => {
    cartModal.style.display = "none";
  });

  // Глобально доступные функции
  window.removeFromCart = function (index) {
    cart.splice(index, 1);
    updateCartDisplay();
  };

  window.changeQuantity = function (index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) cart.splice(index, 1);
    updateCartDisplay();
  };

  // Инициализация
  updateCartDisplay();
});
