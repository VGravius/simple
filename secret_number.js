function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let n = getRandomInt(1, 100);
let min = 1;
let max = 100;
let number = 1;
console.log("Компьютер 1 загадал число " + n);
while (min <= max) {
    let index = Math.floor((min + max) / 2);
    console.log("Попытка: " + number);
    console.log("Компьютер 2: Пробую число " + index + ".");
    if (index < n) {
        console.log("Компьютер 1: Больше.");
        min = index + 1;
    } else if (index > n) {
        console.log("Компьютер 1: Меньше.");
        max = index - 1;
    } else {
        console.log("Компьютер 1: Угадал!");
        break;
    }
    number++;
}