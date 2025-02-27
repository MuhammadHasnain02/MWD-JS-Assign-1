// Declare 3 variables in one statement.
var a = 5, b = 10, c = 15;

// Legal Variables
var firstVariable = ""
var first_variable= ""
var $variable     = ""
var variable12    = ""
var $variable_1   = ""

// illegal Variables
// var 12variable = "" (cannot start with a number)
// var 123        = "" (only number is not allowed)
// var (variable) = "" ( [()] bracket is not allowed)
// var @variable  = "" (special characters [@,!,&,-] are not allowed)
// var if         = "" (reserved keyword)

// Browser Text
document.write("<h1>JAVASCRIPT ALERTS</h1>")
document.write("<h2>“Rules for naming JS variables”</h2><br>")

document.write("<h3>1. Variable names can only contain <u>numbers</u> , <u>$</u> and <u> _</u> . </h3>" + "\n" +  "<h3> For example : $my_1stVariable</h3>")
document.write("<h3>2. Variables must begin with <u>letter</u> , <u> $</u> or <u> _</u> . </h3>" + "\n" + "<h3> For example $name, _name or name .</h3>")
document.write("<h3>3. Variable names are case <u>sensitive</u>.</h3>")
document.write("<h3>4. Variable names should not be JS <u>Keywords</u>.</h3>")





