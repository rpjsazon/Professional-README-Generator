//Global assignments
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Arrays of questions
const questions = [
  {
    type:'input',
    name: 'title',
    message: 'What is the title of the Project?'
  },
  {
    type:'input',
    name: 'description',
    message: 'What is your project description?'
  },
  {
    type:'input',
    name: 'installation',
    message: 'How you install your project?'
  },
  {
    type:'input',
    name: 'usage',
    message: 'How you use your project?'
  },
  {
    type:'input',
    name: 'contributing',
    message: 'How should people contribute to this project?'
  },
  {
    type:'input',
    name: 'tests',
    message: 'How do you test this project?'
  },
  {
    // Type checkbox for selection
    type:'checkbox',
    name: 'license',
    message: 'Choose a license for this project',
    choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause Simplified License', 'None']
  },
  {
    // Type checkbox for selection
    type:'input',
    name: 'email',
    message: 'What is your email?'
  },
]

function writeToFile(filename, data){
  fs.writeFile(filename, data, (err) => {
    if (err)
    throw err;
    console.log('Success! Your input transferred to the README');
  });
};

function init(){
  inquirer.prompt(questions)
  .then(function (userInput){
    console.log(userInput)
    // Saving all data to README.md
    writeToFile("README.md", generateMarkdown(userInput));
  });
};

init();