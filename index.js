function miPrimerFuncion(){
    for(i = 0 ; i <= 100; i++){
        if (i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz " + i)
        }
        else if(i % 3 == 0){
            console.log("Fizz " + i)
        }
        else if(i % 5 == 0){
            console.log("Buzz " + i)
        }
        else{
            console.log(i +" No cumple la condicion")
        }
    };
}

function miSegundaFuncion(){
    let result = '';
    let i = 0;
    
    do {
      i = i + 1;
      result = result + i;
    } while (i <100);
    
    console.log(result);
}

miSegundaFuncion()
