//find a input varibale is number or not

function isvar(num){
    if(isNaN(num)){
        console.log("it is not a number")
    }
    else{
        console.log("its a number")
    }
}

isvar('vishnu')

// find largest number maoung two numbers
function largest(num1,num2){
    if(num1>num2){
        console.log("Num1 is greater")
    }
    else
    {
        console.log("num2 is greater")
    }
}

largest(20,1)
largest(1,20)

//find largest number of three numbers
function biggest(n1,n2,n3){
    if(n1> n2 && n1>n3)
    {
        console.log("n1 is greater")
    }
    else if(n2 > n1 && n2>n3){
        console.log("n2 is greater")
    }
    else{
        console.log("n3 greater")
    }
}
biggest(1,2,3)

// Check if a triangle is equilateral, scalene, or isosceles
function checktriangles(s1,s2,s3){
    if((s1==s2) && (s2==s3) && (s3==s1))
    {
        console.log("its a equilateral triangle")
    }
    else if((s1==s2)||(s2==s3))
    {
        console.log("its a isosceles")
    }
    else if((s1!=s2) && (s2!=s3)&& (s3!=s1))
    {
        console.log("its a scalene triangle")
    }

    else{
        console.log("not mentioned in the above triangles")
    }
}

checktriangles(20,40,50)

// Find the a number is present in given range

function checkrange(num,start,end){
    if(num>end || num<start)
    {
        console.log("its not in range")
    }
    else{
        console.log("it is in range")
    }

}

checkrange(20,21,25)

// Find check if a year is leap year or not

function checkleapyear(year){
    if((year%4==0) && (year%100!=0) || (year%400==0))
    {
        console.log("its a leap year")
    }
    else{
        console.log("its not a leap year")
    }
}
checkleapyear(2025)
checkleapyear(2000)

// Find number of days in a given month

function checkmonth(month){
    if((month>=1 && month<=12) && (month=1,3,5,7,8,10,12))
    {
        console.log("this month has 31 days")
        
    }
    else if(month < 1 && month > 12){
        console.log("Invalid number")
    }
    else{
        console.log("this month hs 30 days")
    }

}

checkmonth(10)
checkmonth(25)