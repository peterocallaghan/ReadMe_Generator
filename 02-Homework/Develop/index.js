//initializing function
function init(){

 // Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// array of questions that will display in terminal
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your app?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter your description for you app. Be as descriptive and in depth as possible.',
      },
    {
      type: 'input',
      name: 'target',
      message: 'Who is the app for?',
    },
    {
      type: 'input',
      name: 'instruction',
      message: 'Please write intructions for your app?',
    },
    {
      type: 'input',
      name: 'report',
      message: 'How do you report issues in your app?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Have you tested your app?',
    },
    {
      type: 'input',
      name: 'contributions',
      message: 'How do you make contributions?',
    },
    {
        type: "checkbox",
        message: "What License did you use for this repository?",
        choices: ["MIT", "GNU General Public License 2.0", "Apache License 2.0", "GNU General Public License 3.0"],
        name: "license",
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email:',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please enter your github:',
      },
  ])
  // write file containg answers
  .then((response) => {
    return fs.writeFileSync(path.join (process.cwd(), "README.md"), generateMarkdown(response));
  });
}


// Function call to initialize app
init();
