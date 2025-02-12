//program to write prime or not 

function isPrime(number){

        for(let i=2;i<=number/2;i++){
            if(number%i===0){
                return false;
            }
          
          
            
        }
        return true

}

console.log(isPrime(13));
console.log(isPrime(27));