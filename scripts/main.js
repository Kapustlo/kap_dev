// Отключение скролла на странице
const scrollOff = () => {
  document.body.style.overflow = "hidden";
};

// Включение скролла на странице
const scrollOn = () => {
  document.body.style.overflow = "";
};

// Модальное окно
const modalWindow = (modalSelector, modalOpenSelector, modalCloseSelector) => {
  const modalWindow = document.querySelector(modalSelector),
    openButtons = document.querySelectorAll(modalOpenSelector),
    closeButton = document.querySelector(modalCloseSelector);

  // Кнопки открытия модального окна
  openButtons.forEach((item) => {
    item.addEventListener("click", (event) => {
      scrollOff();
      event.preventDefault();
      modalWindow.classList.add("modal--enable");
    });
  });

  // Кнопка закрытия модального окна
  closeButton.addEventListener((item) => {
    item.addEventListener("click", () => {
      scrollOn();
      event.preventDefault();
      modalWindow.classList.remove("modal--enable");
    });
  });

  // Если нажал не по модальному окну, то оно закрывается. Аналогия с closeButton.
  modalWindow.addEventListener("click", (event) => {
    if (event.target === modal) {
      scrollOn();
      modalWindow.classList.remove("modal--enable");
    }
  });
};

// Иницилизация всего

window.addEventListener("DOMContentLoaded", () => {});
