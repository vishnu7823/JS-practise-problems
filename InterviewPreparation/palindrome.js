const palindrome = (str)=>{

const reverseString = str.split('').reverse().join('');  //reverse the string

return str === reverseString; //compare it with the old str 
}

console.log(palindrome('vishnu'));
console.log(palindrome('racecar'));