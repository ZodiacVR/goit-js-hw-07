function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



// Отримуємо елементи
const changeColorButton = document.querySelector('.change-color');
const colorText = document.querySelector('.color');

// Додаємо обробник події на кнопку
changeColorButton.addEventListener('click', () => {
  // Генеруємо випадковий колір
  const randomColor = getRandomHexColor();
  
  // Змінюємо колір фону body та текстове значення в span
  document.body.style.backgroundColor = randomColor;
  colorText.textContent = randomColor;
});