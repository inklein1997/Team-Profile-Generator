// Import Class constructors
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

// Import needed files
const generateHTML = ('./src/generateHTML')
const generateCard = ('./src/generateCard')

// Import needed packages
const fs = require('fs');
const inquirer = require('inquirer');

let role = 'Manager'
const teamMembers = []

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
    {
        type: 'input',
        message: "Please enter the Manager's room number",
        name: 'roomNumber',
        when: answers => role == 'Manager'
    },
    {
        type: 'input',
        message: "Please enter the Engineers's GitHub username",
        name: 'github',
        when: answers => role == 'Engineer',
    },
    {
        type: 'input',
        message: "Please enter the Intern's school",
        name: 'school',
        when: answers => role == 'Intern'
    },
]

const questionMenu = [
    {
        type: 'list',
        message: 'Add another member to your team?',
        choices: ['Engineer', 'Intern', 'No'],
        name: 'role'
    }
]

function addMembers(role) {
    (role === undefined) ? role = 'Manager' : role
    inquirer.prompt(questionsAll).then(pushMember)
}

function pushMember(answers) {
    answers.role === undefined ? answers.role = 'Manager' : answers.role = role
    teamMembers.push(answers)
    inquirer.prompt(questionMenu).then((answer) => {
        role = menu(answer)
        menu(answer) !== 'No' ? addMembers(menu(answer)) : showAnswers()
    })
}

const menu = (answer) => {
    switch (answer.role) {
        case 'Intern':
            return 'Intern'
        case 'Engineer':
            return 'Engineer'
        case 'No':
            return 'No'
    }
    console.log(`new role is ${role}`)
}
function showAnswers() {
    console.log(teamMembers)
}
addMembers()