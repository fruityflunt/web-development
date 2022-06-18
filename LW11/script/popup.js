let popupLayout = document.querySelector('.form');
let popup = document.querySelector('.form__content');
let openPopupBtn = document.querySelectorAll('.button');
let closePopup = document.querySelector('.form__close-popup');

openPopupBtn.forEach((button) => {
   button.addEventListener("click", () => {
      popupLayout.classList.add('active')
      popup.classList.add('active')
   })
})

closePopup.addEventListener('click', () => {
   popupLayout.classList.remove('active')
   popup.classList.remove('active')
})

document.addEventListener('click', (e) => {
   if (e.target === popupLayout) {
      popupLayout.classList.remove('active')
      popup.classList.remove('active')
   }
})

document.addEventListener('keydown', (e) => {
   if (e.key === "Escape") {
      popupLayout.classList.remove('active')
      popup.classList.remove('active')
   }
})