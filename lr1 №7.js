alert("Программа для нахождения длины окружности и площади круга по радиусу");
let radius = Number(prompt("Введите длину радиуса окружности:"));
const pi = 3.14;
let circumference = 2 * radius * pi;
let area_of_circle = pi * radius**2;
alert("Длина окружности радиусом " + radius + " равна " + circumference + "\n" + "Площадь круга радиусом " + radius + " равна " + area_of_circle);

