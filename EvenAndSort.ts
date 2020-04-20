function getEvenAndSort(){
    
    var array = new Array(1,2,34,54,55,34,32,11,19,17,54,66,13); 
    var arr = new Array();

    for (let i = 0; i < array.length; i++){
      if (array[i] % 2 ===0){
        arr.push(array[i]);
      }
      //return arr;    
    }
    console.log(arr.sort());
  }


  getEvenAndSort()