var inquirer = require("inquirer");

var MVC = require("./MVC.js");


var one = new MVC.ClozeCards("The first president of the United States was George Washington.", "George Washington");
var two = new MVC.ClozeCards("The second president of the United States was John Adams", "John Adams");
var three = new MVC.ClozeCards("The third president of the United States was Thomas Jefferson", "Thomas Jefferson");


/**
 * Question 1
 */



inquirer.prompt([{
    name: "firstQuestion",
    message: one.partialText
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
        message: two.partialText
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
            message: three.partialText
        }


        ]).then(function (ans) {
            if (two.clozeBack === ans.thirdQuestion) {
                console.log('Correct!');
            } else {
                console.log("Wrong, the correct answer was *Thomas Jefferson* ")
            }



        })
    })
});
