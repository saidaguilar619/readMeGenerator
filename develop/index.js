const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const api = require("./api")
const generateMarkdown = require("./generateMarkdown")

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([{
            type: "input",
            name: "Username",
            message: "What is your Github username?"
        },
        {
            type: 'input',
            name: 'title',
            message: 'Project title?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Description?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Installations required?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Usage?'
        },
        {
            type: 'input',
            name: 'license',
            message: 'License?'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Who is contributing?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Are there tests?'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Any questions?'
        }
    ]);
}

promptUser()
    .then(function (answers) {
        console.log(answers);
        const gitHub = api.getUser(answers.Username)
        const markdown = generateMarkdown(answers);
        return writeFileAsync("ReadMe.md", markdown);
    })
    .then(function () {
        console.log("Successfully wrote to README.md");
    })
    .catch(function (err) {
        console.log(err);
    });


