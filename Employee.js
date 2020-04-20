var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, color, birthyear) {
        this.empName = name;
        this.empColor = color;
        this.birthYear = birthyear;
    }
    Employee.prototype.empDetails = function () {
        console.log("Employee Name : " + this.empName + "\n" + "color : " + this.empColor + "\n" + "BirthYear : " + this.birthYear);
    };
    return Employee;
}());
var AdhocEmployee = /** @class */ (function (_super) {
    __extends(AdhocEmployee, _super);
    function AdhocEmployee(name, color, birthyear, noOfHours) {
        var _this = _super.call(this, name, color, birthyear) || this;
        _this.numberOfHours = noOfHours;
        return _this;
    }
    AdhocEmployee.prototype.empDetails = function () {
        console.log("Employee Name : " + this.empName + "\n" + "No. of Hours : " + this.numberOfHours + "\n" +
            "color : " + this.empColor + "\n" + "BirthYear : " + this.birthYear);
    };
    return AdhocEmployee;
}(Employee));
var empObj2 = new Employee("Akash Saurkar", "Red", 1991);
console.log(empObj2.empDetails());
var empObj = new AdhocEmployee("Akash Saurkar", "Red", 1991, 45);
console.log(empObj.empDetails());
