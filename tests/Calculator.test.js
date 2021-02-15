const Calculator = require('../src/Calculator');

test('Calculator adding two numbers', () => {
    let result = Calculator.Sum(1,2);
    expect(result.GetResults()).toBe(3);
});

test('Calculator difference of two numbers', () => {
    let result = Calculator.Difference(1,2);
    expect(result.GetResults()).toBe(-1);
});

test('Calculator product of two numbers', () => {
    let result = Calculator.Product(1,2);
    expect(result.GetResults()).toBe(2);
});

test('Calculator quotient of two numbers', () => {
    let result = Calculator.Quotient(1,2);
    expect(result.GetResults()).toBe(.5);
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
    let result = Calculator.Quotient(1,2);
    let calculations = Calculator.Calculations;
    calculations.forEach(function (calc) {
        console.log(calc.GetResults())
    });
});