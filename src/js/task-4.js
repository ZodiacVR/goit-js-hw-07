
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  // Запобігаємо стандартній поведінці відправлення форми (перезавантаження сторінки)
  event.preventDefault();
  
  // Отримуємо доступ до елементів форми через властивість elements
  const { email, password } = event.currentTarget.elements;
  
  // Очищаємо значення інпутів від пробілів з обох боків
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  
  // Перевіряємо, чи всі поля заповнені
  if (emailValue === "" || passwordValue === "") {
    alert('All form fields must be filled in');
    return; // припиняємо подальшу обробку форми
  }
  
  // Формуємо об'єкт з введеними даними
  const formData = {
    email: emailValue,
    password: passwordValue,
  };
  
  // Виводимо об'єкт з даними в консоль
  console.log(formData);
  
  // Очищаємо форму методом reset
  event.currentTarget.reset();
});
