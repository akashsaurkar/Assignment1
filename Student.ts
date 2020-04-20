class Student {
    enrolmentNumber : number;
    studentName: string;

    constructor(number: number, name: string) {
            this.studentName = name;
            this.enrolmentNumber  = number;
    }

    display = () => console.log('Enrolment Number : '+this.enrolmentNumber +'\n' +'Student Name : ' + this.studentName)
}
let studObj = new Student(1, 'Akash Saurkar');
studObj.display();