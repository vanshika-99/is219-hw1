const Calculation = require('./models/Calculation');
const Sum = require('./operations/Sum');
const Difference = require('./operations/Difference');
const Product = require('./operations/Product');
const Quotient = require('./operations/Quotient');
const SquareRoot = require('./operations/SquareRoot');
const Square = require('./operations/Square');

class Calculator {
    static Calculations = [];

    static Sum(a,b) {
        let calculation = Calculation.Create(a,b,Sum);
        this.addCalculation(calculation);
        return calculation;
    }

    static Difference(a,b) {
        let calculation = Calculation.Create(a,b,Difference);
        this.addCalculation(calculation);
        return calculation;
    }

    static Product(a,b) {
        let calculation = Calculation.Create(a,b,Product);
        this.addCalculation(calculation);
        return calculation;
    }

    static Quotient(a,b) {
        let calculation = Calculation.Create(a,b,Quotient);
        this.addCalculation(calculation);
        return calculation;
    }
    static SquareRoot(a,b) {
        let calculation = Calculation.Create(a,b,SquareRoot);
        this.addCalculation(calculation);
        return calculation;
    }
    static Square(a,b) {
        let calculation = Calculation.Create(a,b,Square);
        this.addCalculation(calculation);
        return calculation;
    }

}
module.exports = Calculator;