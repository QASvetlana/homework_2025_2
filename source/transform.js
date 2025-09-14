const transform = function(obj, transformFn) {
     // Проверка условия: является ли obj массивом
    if (Array.isArray(obj)) {
    // Для каждого элемента массива рекурсивно вызываем transform
        return obj.map(item => transform(item, transformFn));
    }
    // Проверка условия: является ли obj обычным объектом (не null)
    if (typeof obj === 'object' && obj !== null) {
    // Создание нового пустой объект для результатов
        const result = {};
    // Перебор всех ключей исходного объекта    
        for (const key in obj) {
    // Проверка, что ключ принадлежит самому объекту
            if (Object.hasOwn(obj, key)) {
    // Рекурсивно обрабатываем значение и сохраняем в новый объект
                result[key] = transform(obj[key], transformFn);
            }
        }
    // Возвращаем новый объект с преобразованными значениями     
        return result;
    }
    // Если obj не объект и не массив, применяем функцию преобразования
    return transformFn(obj);
};









