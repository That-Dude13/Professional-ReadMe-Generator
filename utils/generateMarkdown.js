function generateMarkdown(data) {
  return `
  # ${data.title}
  ${badge(data.license)}
  ${data.name}
  ## Description 
  ${data.description}
  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  ${link(data.license)}
  - [Test](#tests)
  - [Credits](#credits)
  - [Questions](#questions)
  - [Deployed Application](#deployed-application)
  ## Installation 
  ${data.installation}
  ## Usage 
  ${data.usage}
  ${section(data.license)}
  ## Tests 
  ${data.tests}
  ## Credits 
  ${data.contributing}
  ## Questions 
  If there are any questions, feel free to contact my email at: ${data.email}
  You can also find me on GitHub at: [${data.github}](https://www.github.com/${data.github})
  ## Deployed Application 
  This application was deplopyed at [${data.deploy}](${data.deploy})
  `
  }
  































// / TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
