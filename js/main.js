document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("animation").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("animation").style.display = "none";
      document.getElementById("header").style.opacity = "1";
      document.getElementById("promo").style.opacity = "1";
      document.getElementById("top-lipsticks").style.opacity = "1";
      document.getElementById("makeup").style.opacity = "1";
    }, 2000);
  }, 4000);
});

// Функция открытия модального окна поиска
function openSearch() {
  document.getElementById("searchModal").classList.add("show");
}

// Функция закрытия модального окна поиска
function closeSearch() {
  document.getElementById("searchModal").classList.remove("show");
}

// Функция переключения видимости меню пользователя
function toggleUserMenu() {
  const userMenu = document.getElementById("userMenu");
  const cart = document.getElementById("cart");

  // Если корзина открыта, закрываем её перед открытием меню
  if (cart.classList.contains("show")) {
    cart.classList.remove("show");
  }

  // Переключаем видимость меню пользователя
  userMenu.classList.toggle("show");
}

// Функция для открытия/закрытия корзины
function toggleCart() {
  const cart = document.getElementById("cart");
  const userMenu = document.getElementById("userMenu");

  // Если меню пользователя открыто, закрываем его перед открытием корзины
  if (userMenu.classList.contains("show")) {
    userMenu.classList.remove("show");
  }

  // Переключаем видимость корзины
  cart.classList.toggle("show");
}

// Закрытие модального окна поиска, если кликнули вне его
window.onclick = function (event) {
  const modal = document.getElementById("searchModal");
  const cart = document.getElementById("cart");
  const userMenu = document.getElementById("userMenu");

  // Закрытие поиска, если кликнули вне окна поиска
  if (event.target === modal) {
    closeSearch();
  }

  // Закрытие корзины, если кликнули вне корзины
  if (event.target === cart) {
    cart.classList.remove("show");
  }

  // Закрытие меню пользователя, если кликнули вне меню
  if (event.target === userMenu) {
    userMenu.classList.remove("show");
  }
};

let currentIndex = 0;

function moveCarousel(direction) {
  const carousel = document.querySelector(".carousel");
  const totalItems = document.querySelectorAll(".carousel-item").length;
  currentIndex = (currentIndex + direction + totalItems) % totalItems;
  carousel.style.transform = `translateX(-${currentIndex * 220}px)`;
}

let cartCount = 0; // Счётчик товаров в корзине

// Функция для обновления числа в корзине
function updateCartCount() {
  const cartCountElement = document.getElementById("cart-count");
  cartCountElement.textContent = cartCount;
}

// Функция для обработки клика по плюсику
function toggleProductInCart(event) {
  const button = event.target;
  const productId = button.parentElement.getAttribute("data-id"); // Получаем id продукта

  if (button.classList.contains("active")) {
    // Удаляем товар из корзины
    button.classList.remove("active");
    cartCount--;
  } else {
    // Добавляем товар в корзину
    button.classList.add("active");
    cartCount++;
  }

  updateCartCount(); // Обновляем количество товаров в корзине
}

// Навешиваем обработчик событий на все кнопки
const addToCartButtons = document.querySelectorAll(".plus-btn");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", toggleProductInCart);
});

document.addEventListener("DOMContentLoaded", function () {
  const cartItems = document.getElementById("cart-items");
  const checkoutBtn = document.getElementById("checkout-btn");
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  let cart = [];

  // Функция обновления корзины
  function updateCart() {
    cartItems.innerHTML = "";

    cart.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `${item.name} - ${item.price} <button class="remove-btn" data-id="${item.id}">Удалить</button>`;
      cartItems.appendChild(li);
    });

    // Показываем или скрываем кнопку "Оформить заказ"
    checkoutBtn.style.display = cart.length > 0 ? "block" : "none";

    // Удаление товара при нажатии "Удалить"
    document.querySelectorAll(".remove-btn").forEach((button) => {
      button.addEventListener("click", function () {
        const id = this.getAttribute("data-id");
        cart = cart.filter((item) => item.id !== id);
        updateCart();
      });
    });
  }

  // Добавление/удаление товара при нажатии на "+"
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const productCard = this.closest(".product-card");
      const productName = productCard.querySelector("h3").textContent;
      const productPrice = productCard.querySelector(".price").textContent;
      const productId = productName.toLowerCase().replace(/\s+/g, "-"); // Уникальный ID

      const productIndex = cart.findIndex((item) => item.id === productId);

      if (productIndex === -1) {
        // Если товара нет в корзине, добавляем
        cart.push({ id: productId, name: productName, price: productPrice });
      } else {
        // Если товар уже в корзине, удаляем его
        cart.splice(productIndex, 1);
      }

      updateCart();
    });
  });

  // Оформление заказа
  checkoutBtn.addEventListener("click", function () {
    alert("Перенаправляем на оформление заказа...");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const promoBtn = document.querySelector(".promo-btn");
  const orderForm = document.getElementById("order-form");
  const closeFormBtn = document.getElementById("close-form");

  // Показать форму заказа
  promoBtn.addEventListener("click", function (event) {
    event.preventDefault();
    orderForm.style.display = "flex"; // Показываем форму
  });

  // Закрыть форму заказа
  closeFormBtn.addEventListener("click", function () {
    orderForm.style.display = "none"; // Скрываем форму
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Прокручиваем страницу вверх
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 50); // Небольшая задержка для корректной работы

  // Блокируем скролл во время анимации
  document.body.classList.add("no-scroll");

  // После анимации разблокируем скролл (замени 3000 на реальное время анимации)
  setTimeout(() => {
    document.body.classList.remove("no-scroll");
  }, 6000);
});
