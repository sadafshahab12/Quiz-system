#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
function greet() {
    return chalk.redBright("Welcome to Quiz System");
}
console.log(greet());
let quiz_points = 0;
let total_question = 5;
let user_name = await inquirer.prompt({
    name: "user",
    type: "input",
    message: chalk.blueBright("Enter Your Name:"),
});
if (user_name.user) {
    console.log(`${user_name.user}, Let's Start the Quiz`);
    let quiz1 = await inquirer.prompt({
        name: "question1",
        message: chalk.blueBright("What has keys but can't open locks?"),
        type: "list",
        choices: ["a guitar", "a piano", "a flute"],
    });
    if (quiz1.question1 === "a piano") {
        console.log(chalk.yellowBright("Correct Answer"));
        quiz_points++;
    }
    else {
        console.log(`Wrong! "a Piano" is the correct answer"`);
    }
    let quiz2 = await inquirer.prompt({
        name: "question2",
        message: chalk.blueBright("What has a head, a tail, but no body?"),
        type: "list",
        choices: ["a chilli", "an onion", "a coin"],
    });
    if (quiz2.question2 === "a coin") {
        console.log(chalk.yellowBright("Correct Answer"));
        quiz_points++;
    }
    else {
        console.log(`Wrong! "a coin" is the correct answer"`);
    }
    let quiz3 = await inquirer.prompt({
        name: "question3",
        message: chalk.blueBright("The more you take, the more you leave behind. What am I?"),
        type: "list",
        choices: ["Footstep", "Shadow", "Air"],
    });
    if (quiz3.question3 === "Footstep") {
        console.log(chalk.yellowBright("Correct Answer"));
        quiz_points++;
    }
    else {
        console.log(`Wrong! "Footstep" is the correct answer"`);
    }
    let quiz4 = await inquirer.prompt({
        name: "question4",
        message: chalk.blueBright("What has a neck but no head?"),
        type: "list",
        choices: ["pen", "bottle", "cup"],
    });
    if (quiz4.question4 === "bottle") {
        console.log(chalk.yellowBright("Correct Answer"));
        quiz_points++;
    }
    else {
        console.log(`Wrong! "bottle" is the correct answer"`);
    }
    let quiz5 = await inquirer.prompt({
        name: "question5",
        message: chalk.blueBright("What comes once in a minute, twice in a moment, but never in a thousand years?"),
        type: "list",
        choices: ['the letter "e" ', 'the letter "a" ', 'the letter "m" '],
    });
    if (quiz5.question5 === 'the letter "m" ') {
        console.log(chalk.yellowBright("Correct Answer"));
        quiz_points++;
    }
    else {
        console.log(`Wrong! "the letter m" is the correct answer"`);
    }
    console.log(chalk.magenta(`you score is ${quiz_points} out of 5`));
    console.log(chalk.redBright(`you percentage is ${(quiz_points / total_question) * 100}%`));
}
else {
    console.log(`User Name Required`);
}
