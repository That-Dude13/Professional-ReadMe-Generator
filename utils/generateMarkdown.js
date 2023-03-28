function generateMarkdown(data) {
  return `
  # ${data.title}
  ${this.renderLicenseBadge(description.license)}

  ## Description 
  ${data.description}
  ## Table of Contents 
  - [Installation Instructions](#installation)
  - [Usage Information](#usage)
  - [Contribution Guidelines](#contributing)
  - [Test Instrctions](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation 
  ${data.installation}
  ## Usage 
  ${data.usage}
  ##
  ${data.license}
  ## Tests 
  ${data.tests}
  ## Contribution 
  ${data.contributing}
  ## Questions 
  Please email questions to: ${data.email}
  Find this and my other projects at: [${data.github}](https://www.github.com/${data.github})
 
  function renderLicenseBadge(license) {
    const badges = {

    }
    Apache 2.0: [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    None:"
  }
  return badges [license]
}
 
  `
  }

 

module.exports = generateMarkdown;




















// / TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}



