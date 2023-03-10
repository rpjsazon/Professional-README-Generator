function generateMarkdown(data){
  return `# ${data.title}

  ## Link:
  https://rpjsazon.github.io/Professional-README-Generator/

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
  - [Email](#email)

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

  ## Email
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}

  `;
}

module.exports = generateMarkdown;