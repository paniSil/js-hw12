import { expect, test, vi } from 'vitest'
import { fetchData, userId } from '../src/async'


/* Асинхронний тест */
test('асинхронний тест з async/await', async () => {
    const data = await fetchData();
    expect(data).toBeDefined();
    expect(data.data).toBe('some math data');
})

/* Мокування */
test('userId повертає 123', async () => {
    const result = await userId();
    expect(result).toBe(123);
})