import { expect, test } from 'vitest'
import { add, divide } from '../src/math'


/* Математичні тести */
test('Додає два числа коректно', () => {
    //Перевірка, що 1 + 2 = 3
    expect(add(1, 2)).toBe(3)
    //Перевірка, що -1 + 1 = 0
    expect(add(-1, 1)).toBe(0)
    //Перевірка, що -10 + (-10) = -20
    expect(add(-10, -10)).toBe(-20)
})

test('Ділення корректне', () => {
    //Перевірка, що 4 / 2 = 2
    expect(divide(4, 2)).toBe(2)
    //Перевірка, що 1 / 2 = 0.5
    expect(divide(1, 2)).toBe(0.5)
    //Перевірка, що 20 / -2 = -10
    expect(divide(20, -2)).toBe(-10)
    //Перевірка, що на 0 не ділиться
    expect(() => divide(1, 0)).toThrowError(/^Zero can not be a divider$/)
})