function generateMarkdown(data) {
  return `
  ${data.title}

  ![Downloads badge](https://img.shields.io/static/v1?label=Downloads&message=1,000,000&color=blue "Downloads Badge")

  # Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Test](#Test)
  - [Questions](#FAQs)
              
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ## Contributing
  ${data.contribution}
  ## Test
  ${data.tests}
  ## Questions
  ${data.questions}`;
}

module.exports = generateMarkdown;
