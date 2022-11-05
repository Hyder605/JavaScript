let num1=Number(prompt("Enter the first number"));

let num2=Number(prompt("Enter the Second number"));
let op=prompt(`Enter the type of operation you want
                + for addition
                - for subtraction
                x or X for multiplication
                / for division`);

if (op=="+") {
    console.log("The Addition of two numbers " + num1 + " and " +num2 + " is " + (num1+num2))
 }
 else if (op=="-"){
    console.log("The Subtraction of two numbers " + num1 + " and " +num2 + " is " + (num1-num2))
 }
 else if (op=="x" || op=="X"){
    console.log("The Multiplication of two numbers " + num1 + " and " +num2 + " is " + (num1*num2))
 }
 else if (op=="/"){
    console.log("The Division of two numbers " + num1 + " and " +num2 + " is " + (num1/num2))
 }
 else {
    console.log("Try again and choose the operator correctly")
 }