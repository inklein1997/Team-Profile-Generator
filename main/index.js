// Import Class constructors
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

// Import needed files
const htmlTemplate = ('./src/html-template')

// Import needed packages
const fs = require('fs');
const inquirer = require('inquirer');

let role = 'Manager'
const questionsAll = [
    {
        type: 'input',
        message: `Please enter the ${role}'s name.`,
        name: 'name',
    },
    {
        type: 'input',
        message: `Please enter the ${role}'s employee ID.`,
        name: 'id',
    },
    {
        type: 'input',
        message: `Please enter the ${role}'s email address.`,
        name: 'email',
    },
]

const questionMenu = [
    {
        type: 'list',
        message: 'Add another member to your team?',
        choices: ['Engineer', 'Intern', 'No']
    }
]

const questionsManager = [
    {
        type: 'input',
        message: "Please enter the Manager's room number",
        name: 'roomNumber',
    },
]

const questionsEngineer = [
    {
        type: 'input',
        message: "Please enter the Engineers's GitHub username",
        name: 'roomNumber',
    },
]

const questionsIntern = [
    {
        type: 'input',
        message: "Please enter the Intern's school",
        name: 'roomNumber',
    },
]

function addMembers() {
    inquirer.prompt(questionsAll).then(pushMember)

}

function pushMember(answers) {
    answers.role === undefined ? answers.role = 'Manager' : answers.role = role
    switch (answers.role) {
        case 'Manager':
            inquirer.prompt(questionsManager).then(showAnswers);
            break;
        case 'Engineer':
            inquirer.prompt(questionsEngineer).then(showAnswers);
            break;
        case 'Intern':
            inquirer.prompt(questionsIntern).then(showAnswers)
            break
    }
}

function showAnswers(answers) {
    console.log(answers)
}
addMembers()