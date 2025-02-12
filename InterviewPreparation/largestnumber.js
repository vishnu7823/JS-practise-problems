//program to find out largest number

function largestnumber(arr){

    

    const sortedarr = arr.sort();
    return (sortedarr[sortedarr.length-1]);

}

console.log(largestnumber([1,2,67,89,24,35]))