// Variables
var age       = 15
var visitTimes= 14
var birthYear = 1990

var VisitorsName = "<b>" + "John Doe" + "</b>"
var productTitle = "<b>" + "T-shirt(s)" + "</b>"
var prodQuantity = 5
var storeName    = "XYZ Clothing store"


// Alerts
alert("I am " + age + " years old")
alert("You have visited this site " + visitTimes + " times")

// Browser Text
document.write("<h1>JAVASCRIPT ALERTS</h1>")

document.write("My birth year is " + birthYear + "<br>")
document.write("Data type of my declared variable is number" + "<br><br>")
console.log(typeof birthYear)

document.write(VisitorsName + " ordered " + prodQuantity + " " + productTitle + " on " + storeName)
