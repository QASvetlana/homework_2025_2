/* eslint-disable require-jsdoc */

'use strict';

QUnit.module('Тестируем функцию transform', () => {
    QUnit.test('Работает правильно с простыми объектами', (assert) => {
        const originalObject = { a: 1, b: 2, c: 3 };
        const transformFunction = (value) => value * 2;
        const result = transform(originalObject, transformFunction);

        assert.deepEqual(result, { a: 2, b: 4, c: 6 }, 'Значения должны быть умножены на 2');
    });

    QUnit.test('Работает правильно с вложенными объектами', (assert) => {
        const originalObject = { a: 1, b: { c: 2, d: 3 }, e: 4 };
        const transformFunction = (value) => value + 1;
        const result = transform(originalObject, transformFunction);

        assert.deepEqual(result, { a: 2, b: { c: 3, d: 4 }, e: 5 }, 'Значения должны быть увеличены на 1');
    });

    QUnit.test('Работает правильно с массивами', (assert) => {
        const originalObject = { a: [1, 2, 3], b: 4 };
        const transformFunction = (value) => value * 3;
        const result = transform(originalObject, transformFunction);

        assert.deepEqual(result, { a: [3, 6, 9], b: 12 }, 'Элементы массива должны быть умножены на 3');
    });

    QUnit.test('Работает с пустыми объектами и массивами', (assert) => {
    const transformFunction = (value) => value * 2;
    
    assert.deepEqual(
        transform({}, transformFunction),
        {},
        'Пустой объект должен остаться пустым'
    );
    
    assert.deepEqual(
        transform([], transformFunction),
        [],
        'Пустой массив должен остаться пустым'
    );
});

QUnit.test('Работает со сложными объектами', (assert) => {
    const toUpperCaseFn = (value) => typeof value === 'string' ? value.toUpperCase() : value;
    
    const result = transform(
        { name: 'john', age: 25, tags: ['js', 'test'] },
        toUpperCaseFn
    );
    
    assert.deepEqual(
        result,
        { name: 'JOHN', age: 25, tags: ['JS', 'TEST'] },
        'Строки должны преобразовываться в верхний регистр'
    );
});

QUnit.test('Обрабатывает различные типы данных', (assert) => {
    assert.strictEqual(
        transform(null, x => x * 2),
        null,
        'null должен остаться null'
    );
    
    assert.strictEqual(
        transform(undefined, x => x * 2),
        undefined,
        'undefined должен остаться undefined'
    );
});
});
