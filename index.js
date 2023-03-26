const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require = ('./utils/gererateMarkdown.js');


function init(){
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
        choices: ['Apache 2.0','Apache 2.0','ISC','MIT','None'],
            
        
   
    },
     
    {   type: 'input',
        message: 'Please create a Table of Contents',
        name: 'Table',
        choices: ['1','2','2','4','5','6'],

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

  ]);
}
init();
function writeToFile(generateMarkdown.js, data) {}












































// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
