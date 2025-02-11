//reverse a string problem


function reverseString(str){

    let reversed = "";   //use to store the reversed string

    for(let i=str.length-1;i>=0;i--){
        reversed = reversed+str[i];
        
    }
    return reversed;
}
console.log(reverseString('vishnu'));

function reverseString(str){
     
    return str.split("").reverse().join("");  //build in methods to reverse
}

console.log(reverseString('Interview'))


