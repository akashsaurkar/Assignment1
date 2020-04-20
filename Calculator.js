var calculator = /** @class */ (function () {
    function calculator(Number1, Number2) {
        this.num1 = Number1;
        this.num2 = Number2;
    }
    calculator.prototype.Addition = function () {
        console.log(this.num1 + this.num2);
    };
    calculator.prototype.Substract = function () {
        console.log(this.num1 - this.num2);
    };
    calculator.prototype.Division = function () {
        console.log(this.num1 / this.num2);
    };
    calculator.prototype.multiplication = function () {
        console.log(this.num1 * this.num2);
    };
    return calculator;
}());
var calcObj = new calculator(100, 50);
calcObj.Addition();
calcObj.Substract();
calcObj.Division();
calcObj.multiplication();
