const Calculator = require('../src/Calculator');

test('Calculator adding two numbers', () => {
    //I need to test the instantiation of the calculation object
    let result = Calculator.Addition(16,4);
    expect(result).toBe(20);
});

test('Calculator subtracting two numbers', () => {
    //I need to test the instantiation of the calculation object
    let result = Calculator.Subtraction(16,4);
    expect(result).toBe(12);
});

test('Calculator multiplying two numbers', () => {
    //I need to test the instantiation of the calculation object
    let result = Calculator.Multiplication(16,4);
    expect(result).toBe(64);
});

test('Calculator dividing two numbers', () => {
    //I need to test the instantiation of the calculation object
    let result = Calculator.Division(16,4);
    expect(result).toBe(4);
});

test('Calculator squaring a number', () => {
    //I need to test the instantiation of the calculation object
    let result = Calculator.Square(16);
    expect(result).toBe(256);
});

test('Calculator taking square root of a number', () => {
    //I need to test the instantiation of the calculation object
    let result = Calculator.SquareRoot(16);
    expect(result).toBe(4);
});

test('Calculator adding to calculations', () => {
    //I need to test the instantiation of the calculation object
    let calculations = Calculator.Calculations;
    calculations.forEach(function (calc) {
        console.log(calc.GetResults())
    });
});