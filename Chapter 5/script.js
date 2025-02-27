// Task 1
var num1 = Number(prompt("Enter any number used for all"))
var num2 = Number(prompt("Enter any number used for all"))

var add = num1 + num2
var sub = num1 - num2
var mul = num1 * num2
var div = num1 / num2
var mod = num1 % num2

document.write("<h1>JAVASCRIPT Assignment</h1>")

document.write("<h2>[ i ]</h2>")
document.write(`<h3>1. Addition of ${num1} and ${num2} is ${add}</h3>`)
document.write(`<h3>2. subtraction of ${num1} and ${num2} is ${sub}</h3>`)
document.write(`<h3>3. Multiplication of ${num1} and ${num2} is ${mul}</h3>`)
document.write(`<h3>4. Division of ${num1} and ${num2} is ${div}</h3>`)
document.write(`<h3>5. Modulus of ${num1} and ${num2} is ${mod}</h3>` + "<br><br>")

// Task 2

document.write("<h2>[ ii ]</h2>")
document.write(`<h3>1. Value after variable declaration is undefined </h3>`)
document.write(`<h3>2. Initial value is ${num1} </h3>`)
document.write(`<h3>3. Value after increment is ${++num1} </h3>`)
document.write(`<h3>4. Value after decrement is ${--num1} </h3>`)
document.write(`<h3>5. The remainder is ${--num1} </h3>`)
