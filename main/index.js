// Import Class constructors
// const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

// Import needed files
const generateHTML = require('./src/generateHTML')
// const generateCard = require('./src/generateCard')

// Import needed packages
const fs = require('fs');
const inquirer = require('inquirer');

const teamMembers = []
const roles = []

const questions = [
    {
        type: 'input',
        message: `Please enter the ${roles[0]}'s name.`,
        name: 'name',
    },
    {
        type: 'input',
        message: `Please enter the ${roles[0]}'s employee ID.`,
        name: 'id',
    },
    {
        type: 'input',
        message: `Please enter the ${roles[0]}'s email address.`,
        name: 'email',
    },
    {
        type: 'input',
        message: "Please enter the Manager's room number",
        name: 'roomNumber',
        when: answers => roles[0] == 'Manager'
    },
    {
        type: 'input',
        message: "Please enter the Engineers's GitHub username",
        name: 'github',
        when: answers => roles[0] == 'Engineer',
    },
    {
        type: 'input',
        message: "Please enter the Intern's school",
        name: 'school',
        when: answers => roles[0] == 'Intern'
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
    if(role === undefined) {
        role = "Manager"
    }
    roles.push(role)
    inquirer.prompt(questions).then(pushMember)
}

function pushMember(answers) {
    answers.role = roles.pop()
    switch(answers.role) {
        case 'Intern':
            teamMembers.push(new Intern(answers.name, answers.id, answers.email, answers.school))
            break
        case 'Engineer':
            teamMembers.push(new Engineer(answers.name, answers.id, answers.email, answers.github))
            break
        case 'Manager':
            teamMembers.push(new Manager (answers.name, answers.id, answers.email, answers.roomNumber))
            break
    }
    inquirer.prompt(questionMenu).then((answer) => {
        menu(answer) !== 'No' ? addMembers(menu(answer)) : createHTML();
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
}


function createHTML() {    
// console.log(teamMembers[0].__proto__.constructor.name)
// teamMembers.forEach(member => console.log(member))
    fs.writeFile('./dist/index.html', generateHTML(teamMembers), (err) => {
        err ? console.log(err) : console.log( 'teamMembers')
    })
}

addMembers()