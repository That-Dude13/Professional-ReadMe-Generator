const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require = ('./utils/gererateMarkdown.js');
const questions = require ([])

inquirer
  .prompt([
   
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'Title',
    },
   
    {
      type: 'input',
      message: 'Enter a description of your project',
      name:'Description',
    },

    {
        type: 'input',
        message: 'Please pick the license used',
        name: 'License',
        questions: [
            {value: 'Apache 2.0'},
            {value: 'GNU GPL v3'},
            {value: 'ISC'},
            {value: 'MIT'},
            {value: ''},
        ],
    }
   
    {
        type: 'input',
        message: 'Please create a Table of Contents',
        name: 'Table',

    },
   
    {  
        type: 'input',
        message: 'Please provide installation instructions',
        name: 'Installation',
    
    },
   
    {
        type: 'input',
        message: 'Please provide usage information',
        name: 'Usage',
    },
   
    {   
        type: 'input',
        message: 'Please provide usage gudielines',
        name: 'Contributing',
    },   
    
    {
        type: 'input',
        message: 'Please provide testing instructions',
        name: 'Tests',
    },

  ])














































// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
