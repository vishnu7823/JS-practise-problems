//program to check teh two strings are anagrams or not 

//anagram is formed by rearranging the words of another word
//example (silent,listen)

function anagrams(str1,str2){

    const string1 = str1.split('').sort().join(''); //convert to arr and sort 
    const string2 = str2.split('').sort().join('');//check both the elements are equal then it anagrams it return true else false
    return string1 === string2;
}
console.log(anagrams('listen','best'))
console.log(anagrams('listen','silent'))
