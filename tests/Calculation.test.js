const Calculation = require('../src/models/Calculation');
const Sum = require('../src/operations/Sum');
const Difference = require('../src/operations/Difference');
const Product = require('../src/operations/Product');
const Quotient = require('../src/operations/Quotient');
const SquareRoot = require('../src/operations/SquareRoot');
const Square = require('../src/operations/Square');

test('Test - Calculation Instantiation', () => {
    let op = Sum;
    let calculation = new Calculation(1,2,op);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe(op);
});

test('Test - Results for Sum', () => {
    let op = Sum;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(3);
});

test('Test - Results for Difference ', () => {
    let op = Difference;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(-1);
});

test('Test - Results for Product', () => {
    let op = Product;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(2);
});

test('Test - Results for Quotient ', () => {
    let op = Quotient;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(0.5);
});

test('Test - Results for Root', () => {
    let op = SquareRoot;
    let calculation = new Calculation(4,2,op);
    expect(calculation.GetResults()).toBe(2);
});

test('Test - Results for Square', () => {
    let op = Square;
    let calculation = new Calculation(2,2,op);
    expect(calculation.GetResults()).toBe(4);
});