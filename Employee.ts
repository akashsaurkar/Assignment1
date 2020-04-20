class Employee {
    empColor: string;
    empName: string;
    birthYear: number;

    constructor(name: string, color: string, birthyear:number) {
            this.empName = name;
            this.empColor = color;
            this.birthYear=birthyear;
    }

    empDetails():void {
        console.log("Employee Name : " + this.empName+"\n" + "color : "+this.empColor +"\n" + "BirthYear : "+this.birthYear);
    }
}

class AdhocEmployee extends Employee {
    numberOfHours: number;
    
    constructor(name: string, color: string, birthyear:number,noOfHours: number) {
        super(name,color,birthyear);
        this.numberOfHours = noOfHours;
    }

    empDetails():void {
        console.log("Employee Name : " + this.empName+"\n" +  "No. of Hours : " + this.numberOfHours +"\n"+
        "color : "+this.empColor +"\n" + "BirthYear : "+this.birthYear);
    }

}


let empObj2 = new Employee("Akash Saurkar","Red",1991);
console.log(empObj2.empDetails());

let empObj = new AdhocEmployee("Akash Saurkar","Red",1991,45);
console.log(empObj.empDetails());