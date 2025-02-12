//program to check fro duplicate values in an array

function findduplicate(arr){

    let distincarray = [];

    for(let i=0;i<arr.length;i++){

        if(distincarray.indexOf(arr[i])===-1) //it checks the elements present in the distinc array if not the value == -1 it will got the next step ,if yes it will terminate to return
            distincarray.push(arr[i])
    }
    return distincarray;
}

console.log(findduplicate([1,2,3,4,1,4]));


//using set object - it will store only unique elements in it

function duplicate(array){
    
    return [...new Set(array)]; //...  use to conver the set into array
}
console.log(duplicate([1,2,1,3,5,3,6,5,6]));