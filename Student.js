var Student = /** @class */ (function () {
    function Student(number, name) {
        var _this = this;
        this.display = function () { return console.log('Enrolment Number : ' + _this.enrolmentNumber + '\n' + 'Student Name : ' + _this.studentName); };
        this.studentName = name;
        this.enrolmentNumber = number;
    }
    return Student;
}());
var studObj = new Student(1, 'Akash Saurkar');
studObj.display();
