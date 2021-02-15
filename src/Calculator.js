const Calculation = require('./models/Calculation');
const Sum = require('./operations/Sum');
const Difference = require('./operations/Difference');
const Product = require('./operations/Product');
const Quotient = require('./operations/Quotient');
const SquareRoot = require('./operations/SquareRoot');
const Square = require('./operations/Square');

class Calculator {
    static Calculations = [];

    static Sum(a, b) {
        let calculation = Calculation.Create(a, b, Sum);
        return calculation;
    }

    static Difference(a, b) {
        let calculation = Calculation.Create(a, b, Difference);
        return calculation;
    }

    static Product(a, b) {
        let calculation = Calculation.Create(a, b, Product);
        return calculation;
    }

    static Quotient(a, b) {
        let calculation = Calculation.Create(a, b, Quotient);
        return calculation;
    }
    static SquareRoot(a, b) {
        let calculation = Calculation.Create(a, b, SquareRoot);
        return calculation;
    }
    static Square(a, b) {
        let calculation = Calculation.Create(a, b, Square);
        return calculation;
    }

}
module.exports = Calculator;