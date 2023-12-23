alert("Программа для нахождения объёма и площади поверхности прямоугольного параллелепипеда по длине его ребер");
let edge_1 = Number(prompt("Введите длину первого ребра:"));
let edge_2 = Number(prompt("Введите длину второго ребра:"));
let edge_3 = Number(prompt("Введите длину третьего ребра:"));
let parallelepiped_volume = edge_1 * edge_2 * edge_3;
let parallelepiped_surface_area = 2*(edge_1*edge_2 + edge_2*edge_3 + edge_1*edge_3);
alert("Объём прямоугольного параллелепипеда с ребрами " + edge_1 + ", " + edge_2 + " и " + edge_3 + " равен " + parallelepiped_volume + "\n" + "Площадь поверхности прямоугольного параллелепипеда с ребрами " + edge_1 + ", " + edge_2 + " и " + edge_3 + " равна " + parallelepiped_surface_area);

