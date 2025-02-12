//program to find out factorial

function factorial(num){

    if(num===0){
        return 1;
    }

    let factorialnum = 1;
    for(let i=1;i<=num;i++){
        factorialnum = factorialnum*i
    }
    return factorialnum;
}

console.log(factorial(5))
console.log(factorial(25))