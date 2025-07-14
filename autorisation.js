// Ждём полной загрузки DOM-дерева перед выполнением скрипта
document.addEventListener("DOMContentLoaded", function () {

  // Получаем элементы формы по их ID
  const emailField = document.getElementById("email_field");     // поле ввода email
  const loginField = document.getElementById("login");           // поле ввода логина
  const passwordField = document.getElementById("password_field"); // поле ввода пароля
  const submitButton = document.getElementById("submit");        // кнопка "Зарегистрироваться"

  // Добавляем обработчик события на клик по кнопке регистрации
  submitButton.addEventListener("click", function (event) {
      event.preventDefault(); // Предотвращаем отправку формы по умолчанию

      // Сохраняем введённые значения, обрезая пробелы по краям
      const email = emailField.value.trim();
      const login = loginField.value.trim();
      const password = passwordField.value.trim();

      // Проверяем, что все поля заполнены
      if (!email || !login || !password) {
          alert("Пожалуйста, заполните все поля.");
          return; // Останавливаем дальнейшую проверку
      }

      // Проверяем корректность email с помощью функции validateEmail
      if (!validateEmail(email)) {
          alert("Введите корректный email.");
          return;
      }

      // Проверка длины пароля (не менее 6 символов)
      if (password.length < 6) {
          alert("Пароль должен содержать минимум 6 символов.");
          return;
      }

      // Если все проверки пройдены, показываем сообщение об успешной регистрации
      alert("Регистрация успешна! Добро пожаловать, " + login + "!");
  });

  // Функция проверки корректности email с использованием регулярного выражения
  function validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // простая проверка email
      return emailPattern.test(email); // возвращает true, если email корректен
  }
});
