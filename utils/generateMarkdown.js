function generateMarkdown(data){
  return `# ${data.title}

  ## License:
  ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

  ## Description:
  ${data.description}

  ## Table of Contents:
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Usage:
  ${data.usage}

  ## License:
  ${data.license}

  ## Contributing:
  ${data.contributing}

  ## Tests:
  ${data.tests}

  `;
}

module.exports = generateMarkdown;