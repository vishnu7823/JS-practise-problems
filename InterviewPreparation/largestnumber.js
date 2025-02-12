//program to find out largest number

function largestnumber(arr){

    

    const sortedarr = arr.sort();
    return (sortedarr[sortedarr.length-1]);

}

console.log(largestnumber([1,2,67,89,24,35]))   


//using loop method

function largest(arr){
    let largestnumber = arr[0];

    for(let i=0;i<=arr.length;i++){
        if(arr[i]>largestnumber){
            largestnumber = arr[i];
        }
    }
    return largestnumber;
}

console.log(largest([1,5,4,3,8,2]))