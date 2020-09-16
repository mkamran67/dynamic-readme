function generateMarkdown(data) {
  return `

# ${data.title}

## Description
${data.description}

## Table of Contents
  1. [Title](${data.title})
  2. [Description](${description})
  3. [Installation]


${data.installation ? `## Installation \n ${data.installation}` : ''}

## Usage
${data.usage}
${data.usage ? `## Installation \n ${data.usage}` : ''}

## License ${data.badge}
${data.license}
${data.license ? `## Installation \n ${data.license}` : ''}

## Contributing
${data.contributing}
${data.contributing ? `## Installation \n ${data.contributing}` : ''}

## Testing
${data.testing}
${data.testing ? `## Installation \n ${data.testing}` : ''}

## Questions
${data.}
${data.installation ? `## Installation \n ${data.installation}` : ''}


`;
}

module.exports = generateMarkdown;
