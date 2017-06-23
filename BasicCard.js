var inquirer = require("inquirer");


var MVC = require("./MVC.js");






var one = new MVC.BasicCards(" 1. Who was the first president of the United States?", "George Washington");
var two = new MVC.BasicCards(" 2. Who was the second president of the United States?", "John Adams");
var three = new MVC.BasicCards(" 3. Who was the third president of the United States?", "Thomas Jefferson");


/**
 * Had the inquirer function nested in the prompt but this was cleaner and more orthodox
 */


inquirer.prompt([

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
    }


]).then(function (ans) {

    console.log("");
    console.log("********ANSWERS********");
    console.log("");


    if (ans.questionOne === one.back) {
        console.log("#1 Correct")
    } else {
        console.log("#1 Wrong, the correct answer was " + one.back)
    }



    if (ans.questionTwo === two.back) {
        console.log("#2 Correct")
    } else {
        console.log("#2 Wrong, the correct answer was " + two.back)
    }



    if (ans.questionThree === three.back) {
        console.log("#3 Correct")
    } else {
        console.log("#3 Wrong, the correct answer was " + three.back)
    }


});


