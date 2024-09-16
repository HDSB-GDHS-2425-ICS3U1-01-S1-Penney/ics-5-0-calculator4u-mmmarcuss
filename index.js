
let x = prompt("Welcome to calculator. I will ask you two numbers and an arithmitic expression. What should the first number be?", "0");
let expression = prompt("what is our expression? Please enter it as a symbol (+, -, *, /). You may also enter 'square number' to square root, or '^' to raise the first number to the power of the second.");
let num1;
let num2;

 function setToNumber () {
    num1 = Number(x);
    num2 = Number(y);
 }
 
 setToNumber ();

if (expression == "square number") {
    alert(Math.sqrt(num1))

} else {
    var y = prompt("what should our last number be?", "0");
    setToNumber ();
    
    if (expression == "^") {
        alert(Math.pow(num1, num2))
    
    } else if (expression == "+") {
        alert(num1 + num2);
    
    } else if (expression == "-" ) {
        alert(num1 - num2);
    
    } else if (expression == "*" ) {
        alert(num1 * num2);
    
    } else if (expression == "/" ) {
        alert(num1 / num2);
    
    } else {
        alert("invaled entry. Please enter two numerical values, and an expression (+, -, *, or /). You may also square the first number, or raise the first number to the power of the second number.");
    
    }
}


