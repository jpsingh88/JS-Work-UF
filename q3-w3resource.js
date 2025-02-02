/*
Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor
Sample numbers : 0, -1, 4
Output : 4, 0, -1
*/

/* Possible solution
abc
acb
bac
bca 
cab
cba
*/

let a = prompt("Enter 1st number");
let b = prompt("Enter 2nd number");
let c = prompt("Enter 3rd number");

var d;

if (a>b && a>c && b>c) {
    d=[a,b,c];
} else if (a>c && a>b && c>b) {
    d=[a,c,b];
} else if (b>a && b>c && a>c) {
    d=[b,a,c];
} else if (b>c && c>a && c>a) {
    d=[b,c,a];
} else if (c>a && a>b && c>b) {
    d=[c,a,b];
} else if (c>b && c>a && b>a){
    d=[c,b,a];
}

alert(d);