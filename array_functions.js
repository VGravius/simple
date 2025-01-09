function mySlice(array, start_array = 0, end_array = array.length) {
    const array_result = []; // Новый массив
    if (start_array < 0) {
        start_array = Math.max(array.length + start_array, 0);
    }
    if (end_array < 0) {
        end_array = Math.max(array.length + end_array, 0);
    }
    for (let index = start_array; index < end_array; index++) {
        if (index < array.length) {
            array_result.push(array[index]);
        }
    }
    return array_result; // Возвращаем полученный массив
}
function myIndexOf(array, item, from = 0) {
    if (from < 0) {
        from = Math.max(array.length + from, 0);
    }
    for (let index = from; index < array.length ; index++) {
        if (array[index] === item) {
            return index; // Элемент найден по индексу
        }
    }
    return -1; // Элемент не найден по индексу
}
function myIncludes(array, item, from = 0) {
    if (from < 0) {
        from = Math.max(array.length + from, 0);
    }
    for (let index = from; index < array.length; index++) {
        if (array[index] === item) {
            return true; // Элемент найден
        }
    }
    return false; // Элемент не найден
}
const array = [1, 2, 3, 4, 5]; // Исходный массив
// (Копирование элементов из старого массива в новый массив)
const slicedArray = mySlice(array, 1, 4);
console.log(slicedArray); // [2, 3, 4]
// (Поиск элемента по его индексу в массиве)
const index = myIndexOf(array, 3);
console.log(index); // 2
// (Проверка на существование элемента в массиве)
const includes = myIncludes(array, 4);
console.log(includes); // true
