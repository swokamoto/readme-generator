const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide installation instructions.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide usage information.',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide test instructions.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license.',
      choices: ['MIT', 'Apache', 'GPL'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    }
  ])
  .then((answers) => {
    console.log(answers);
    const readme = 
`# ${answers.title}
![License](https://img.shields.io/badge/License-${answers.license}-blue.svg)
## Description
${answers.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${answers.installation}
## Usage
${answers.usage}
## License
This project is licensed under the ${answers.license} license.
## Contributing
Please follow the [Contributor Covenant](https://www.contributor-covenant.org/) guidelines.
## Tests
${answers.tests}
## Questions
If you have any questions, please reach out to me at ${answers.email}. 
You can also check out my GitHub profile at [https://github.com/${answers.github}](https://github.com/${answers.github}).
`;

    fs.writeFile('README.md', readme, (err) =>
      err ? console.error(err) : console.log('Your README.md is created!')
    );
  });
