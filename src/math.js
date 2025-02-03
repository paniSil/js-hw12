const add = (a, b) => a + b;

const divide = (a, b) => {
    if (b === 0) {
        throw new Error('Zero can not be a divider');
    }
    return a / b;
};

export { add, divide }