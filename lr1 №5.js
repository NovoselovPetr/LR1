alert("Программа для нахождения объёма и площади поверхности куба по длине его ребра");
let edge = Number(prompt("Введите длину ребра куба:"));
let cube_volume = edge**3;
let cube_surface_area = 6 * edge**2;
alert("Объём куба с ребром " + edge + " равен " + cube_volume + "\n" + "Площадь поверхности куба с ребром " + edge + " равна " + cube_surface_area);

