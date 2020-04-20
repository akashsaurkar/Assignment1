var getDiscount = (price:number, disc:number)=> {    

  
    const totalValue  = price - (price * disc/100)
    console.log("Total Price with Discount : "+ totalValue)  

 } 

 getDiscount(1000,50)