const Calculator = require('../src/Calculator');

test('Calculator adding two numbers', () => {
    let result = Calculator.Sum(16,4);
    expect(result.GetResults()).toBe(20);
});

test('Calculator Difference of two numbers', () => {
    let result = Calculator.Difference(16,4);
    expect(result.GetResults()).toBe(12);
});

test('Calculator Product of two numbers', () => {
    let result = Calculator.Product(16,4);
    expect(result.GetResults()).toBe(64);
});

test('Calculator Quotient of two numbers', () => {
    let result = Calculator.Quotient(16,4);
    expect(result.GetResults()).toBe(4);
});

test('Calculator Square Root of two numbers', () => {
    let result = Calculator.SquareRoot(4,2);
    expect(result.GetResults()).toBe(2);
});

test('Calculator Square of two numbers', () => {
    let result = Calculator.Square(2,2);
    expect(result.GetResults()).toBe(4);
});

test('Calculator adding to calculations', () => {
    let result = Calculator.Quotient(16,4);
    let calculations = Calculator.Calculations;
    calculations.forEach(function (calc) {
        console.log(calc.GetResults())
    });
});