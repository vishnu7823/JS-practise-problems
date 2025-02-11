//find the largest word from the sentence

function largestword(senetnce){
    const words = senetnce.split(" ");  //split method splits the string into new array and return it ,and it wont changethe original value
    let longestword = "";

    for(let word of words){

        if(word.length>longestword.length){
            longestword = word;
        }
    }
    return longestword;

}

console.log(largestword("My name is VishnuVardhan"));