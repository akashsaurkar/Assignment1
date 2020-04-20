class calculator
{
    num1: number;
    num2: number;

    constructor(Number1: number, Number2: number) {
            this.num1 = Number1;
            this.num2 = Number2;
    }
  
    Addition()
    {
        console.log (this.num1+this.num2);
    } 
 
    Substract()
    {
        console.log (this.num1-this.num2);
    }
    
    Division()
    {
        console.log (this.num1/this.num2);
    }
    
    multiplication()
    {
        console.log (this.num1*this.num2);
    }
 
}


let calcObj = new calculator(100,50);

calcObj.Addition();
calcObj.Substract();
calcObj.Division();
calcObj.multiplication();