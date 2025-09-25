// Імпортуємо клас URL та URLSearchParams
const { URL, URLSearchParams } = require('url');

// Константи для параметрів (варіант 6)
const date = "20231001";     // 1 жовтня 2023 у форматі YYYYMMDD
const time_period = "q";     // q = квартал

// Створюємо базовий URL НБУ
const myUrl = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/bankact");

// Додаємо параметри запиту
myUrl.search = new URLSearchParams({
    date: date,
    time_period: time_period,
    json: "" // щоб отримати відповідь у форматі JSON
});

// Виводимо готовий URL у консоль
console.log(myUrl.toString());
