function generateMarkdown(data) {
  return `
  # ${data.title}
  ${badge(data.license)}

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
  `
  }
  const generateMarkdown = markdown
  function generateMarkdown(data) {
    return `# ${data.title},
    # ${data.description}, # ${data.installation},
    # ${data.usage}, # ${data.license}, #${data.tests},
    # ${data.contributing}, # ${data.email}, # ${data.github}
    fs.writefile('README.md)
  
  `;
  }

module.exports = generateMarkdown;









//  ${link(data.license)}



















// // / TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// // module.exports = generateMarkdown;
