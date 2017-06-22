//argument 1

var inquirer = require("inquirer");

var MVC = require("./MVC.js");


var one = new MVC.ClozeCards("The first president of the United States was George Washington.", "George Washington");
var two = new MVC.ClozeCards("The second president of the United States was John Adams", "John Adams");
var three = new MVC.ClozeCards("The third president of the United States was Thomas Jefferson", "Thomas Jefferson");


/*inquirer.prompt([

 {
 type: 'input',
 name: 'questionOne',
 message: one.front
 },


 {
 type: 'input',
 name: 'questionTwo',
 message: two.front
 },


 {
 type: 'input',
 name: 'questionThree',
 message: three.front
 }*/





/**
 * Question 1
 */



inquirer.prompt([{
    name: "firstQuestion",
    message: one.partial
}




]).then(function (ans) {
    if (one.clozeBack === ans.firstQuestion) {
        console.log("Correct!");
    } else {
        console.log("Wrong, the correct answer was *George Washington* ")
    }





/**
 * Question 2
 */



inquirer.prompt([{
    name: "secondQuestion",
    message: two.partial
}




]).then(function (ans) {
    if (two.clozeBack === ans.secondQuestion) {
        console.log('Correct!');
    } else {
        console.log("Wrong, the correct answer was *John Adams* ")
    }





/**
 * Question 3
 */



inquirer.prompt([{
    name: "thirdQuestion",
    message: three.partial
}




]).then(function (ans) {
    if (two.clozeBack === ans.thirdQuestion) {
        console.log('Correct!');
    } else {
        console.log("Wrong, the correct answer was *Thomas Jefferson* ")
    }

}







/*var firstPresident = new BasicCard(
 "Who was the first president of the United States?", "George Washington");

 // "Who was the first president of the United States?"
 console.log(firstPresident.front);

 // "George Washington"
 console.log(firstPresident.back);

 var firstPresidentCloze = new ClozeCard(
 "George Washington was the first president of the United States.", "George Washington");

 // "George Washington"
 console.log(firstPresidentCloze.cloze);

 // " ... was the first president of the United States.
 console.log(firstPresidentCloze.partial); "

 // "George Washington was the first president of the United States.
 console.log(firstPresidentCloze.fullText): "

 // Should throw or log an error because "oops" doesn't appear in "This doesn't work"
 var brokenCloze = new ClozeCard("This doesn't work", "oops");*/







//argument 2
//cloze


//module.exports = ClozeCard;