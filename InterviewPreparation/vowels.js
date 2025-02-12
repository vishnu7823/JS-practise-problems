//program to return the count of vowels in a string

function countvowels(str){
let count =0;
const vowels=['a','e','i','o','u']

for(let char of str){  //loop to each char in str 

    if(vowels.includes(char)){ //check each char of str that has value of the vowels array if yes increase count 
        count++;
    }
}
return count; //return the number of vowels

}

console.log(countvowels('vowels'));
console.log(countvowels('hello vishnu'));