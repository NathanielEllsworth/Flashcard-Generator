var inquirer = require("inquirer");


var MVC = require("./MVC.js");






var one = new MVC.BasicCards("Who was the first president of the United States?", "George Washington");
var two = new MVC.BasicCards("Who was the second president of the United States?", "John Adams");
var three = new MVC.BasicCards("Who was the third president of the United States?", "Thomas Jefferson");


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


]).then(function (inquirer) {


    if (ans.questionOne === one.back) {
        console.log("Correct")
    } else {
        console.log("Wrong, the correct answer was " + one.back)
    }



    if (ans.questionTwo === two.back) {
        console.log("Correct")
    } else {
        console.log("Wrong, the correct answer was " + two.back)
    }



    if (ans.questionThree === three.back) {
        console.log("Correct")
    } else {
        console.log("Wrong, the correct answer was " + three.back)
    }


});



//in the mvc


/*function BasicCard(front, back) {
    this.front = front;
    this.back = back;

}*/








/*exports.basicCard = function basicCard(front, back) {

    this.front = front;
    this.back = back

};*/


//module.exports = BasicCard;