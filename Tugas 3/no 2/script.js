const calculator = (operator, ...numbers) => {
    switch (operator) {
        case '+':
            return numbers.reduce((a, b) => a + b, 0);
        case '-':
            return numbers.reduce((a, b) => a - b);
        case '*':
            return numbers.reduce((a, b) => a * b, 1);
        case '/':
            return numbers.reduce((a, b) => a / b);
        case '%':
            return numbers.reduce((a, b) => a % b);
        default:
            return 'Operator tidak valid';
    }
};

console.log(calculator('+', 1, 2, 3)); // Output: 6
console.log(calculator('-', 10, 3, 2)); // Output: 5
console.log(calculator('*', 2, 3, 4)); // Output: 24
console.log(calculator('/', 20, 2, 2)); // Output: 5
console.log(calculator('%', 10, 3)); // Output: 1