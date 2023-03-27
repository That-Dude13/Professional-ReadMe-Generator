const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require ('./utils/generateMarkdown');


function init(){
inquirer
  .prompt([
   
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
   
    {
      type: 'input',
      message: 'Enter a description of your project',
      name:'description',
    },

    {
        type: 'list',
        message: 'Please pick the license used',
        name: 'license',
        choices: ['Apache 2.0','Apache 2.0','ISC','MIT','None'],
            
        
   
    },
     
    {  
        type: 'input',
        message: 'Please provide installation instructions',
        name: 'installation',
    
    },
   
    {
        type: 'input',
        message: 'Please provide usage information',
        name: 'usage',
    },
   
    {   
        type: 'input',
        message: 'Please provide usage gudielines',
        name: 'contributing',
    },   
    
    {
        type: 'input',
        message: 'Please provide testing instructions',
        name: 'tests',
    },

    {
        type: 'input',
        message: 'what is your email address?',
        name: 'email',
    },

    {
        type: 'input',
        messgae: 'what is your GitHub username?',
        name: 'github',

    },

  ]);
}
init();


    





const content = 'Some content!';

fs.writeFile('README.md', content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});


 












































// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
