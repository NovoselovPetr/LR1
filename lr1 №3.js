alert("Программа для нахождения площади и периметра прямоугольника по его сторонам");
let side_1 = Number(prompt("Введите длину первой стороны прямоугольника:"));
let side_2 = Number(prompt("Введите длину второй стороны прямоугольника:"));
let perimeter_of_rectangle = 2*(side_1 + side_2);
let area_of_rectangle = side_1 * side_2;
alert("Периметр прямоугольника со сторонами " + side_1 + " и " + side_2 + " равен " + perimeter_of_rectangle + "\n" + "Площадь прямоугольника со сторонами " + side_1 + " и " + side_2 + " равна " + area_of_rectangle);

