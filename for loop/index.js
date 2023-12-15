//1) Get the sum of two arrays…actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.

let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
let sum=0;
for(i=0;i<arr_1.length;i++)
{
    
    sum+=arr_1[i]
    
}

for(i=0;i<arr_2.length;i++){

    sum+=arr_2[i]
}
console.log(sum)

// 2)Using a for loop print all even numbers up to and including n. Don’t include 0.

let n=22;

for(n=0;n<22;n++){
    if(n%2==0){
        console.log("even number"+n)
    }
}

//3)Using a for loop output the elements in reverse order

// let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

function reversearray(arr){
    let numarr=arr.length
    let newarr=[]
    for(i=0;i<numarr;i++){
        let inarr=arr;
        newarr[i]=inarr.pop();
    }
    console.log(newarr)
}reversearray(["A", "B", "C", "D", "E", "F"])



