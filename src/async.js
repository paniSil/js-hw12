/* fetchData для тестування промісів */
export const fetchData = () => Promise.resolve({ data: 'some math data' })

/* userId для тестування мокування */
export const userId = async () => {
    return 123;
}