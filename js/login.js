// Ждём полной загрузки всей HTML-структуры (DOM), прежде чем выполнять код
document.addEventListener("DOMContentLoaded", function () {

    // Получаем элементы формы по их ID
    const emailField = document.getElementById("email_field2");         // поле для ввода email
    const loginField = document.getElementById("login2");               // поле для ввода логина
    const passwordField = document.getElementById("password_field2");   // поле для ввода пароля
    const submitButton = document.getElementById("submit2");            // кнопка "Войти"

    // Добавляем обработчик события на клик по кнопке "Войти"
    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); // Предотвращаем стандартное поведение формы (перезагрузку страницы)

        // Получаем значения из полей, удаляя пробелы в начале и в конце
        const email = emailField.value.trim();
        const login = loginField.value.trim();
        const password = passwordField.value.trim();

        // Проверка: все ли поля заполнены
        if (!email || !login || !password) {
            alert("Пожалуйста, заполните все поля.");
            return; // Прерываем выполнение, если есть пустые поля
        }

        // Проверка: корректен ли email
        if (!validateEmail(email)) {
            alert("Введите корректный email.");
            return; // Прерываем выполнение, если email не соответствует формату
        }

        // Если все проверки пройдены — выводим сообщение об успешном входе
        alert("Успешный вход! Добро пожаловать, " + login + "!");
    });

    // Функция для проверки правильности email с помощью регулярного выражения
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Простое регулярное выражение для email
        return emailPattern.test(email); // Возвращает true, если email соответствует шаблону
    }
});
