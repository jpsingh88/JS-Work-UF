/* 
Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign. Go to the editor
Sample numbers : 3, -7, 2
Output : The sign is -
*/

// let a = prompt("Enter 1st number")
// let b = prompt("Enter 2nd number")
// let c = prompt("Enter 3rd number")

// var d = a*b*c;
var e;
d=false;
switch (d){
    case (false):     // fixed value in case
    e = '-';
    break;
    case (true):
    e = '+';
    break;
    default:
    e = '+-';
}
/*
if (d>0){
    e = '+';
}
else{
    e = '-';
}
*/
console.log ("The answer is", d ,"and the sign is", e)