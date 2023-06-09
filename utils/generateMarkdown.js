function generateMarkdown(data) {
  function renderLicenseBadge(license) {
    if (license == "Apache 2.0") {
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    }

    if (license == "ISC") {
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
    }

    if (license == "MIT") {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    }

    if (license == "None") {
      return "";
    }
  }
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

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
  Find this and my other projects at: [${data.github}](https://www.github.com/${
    data.github
  })`;
}

module.exports = generateMarkdown;
