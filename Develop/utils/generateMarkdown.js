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

## License ${data.badge}
${data.license}

## Contributing
${data.contributing}

## Testing
${data.testing}

## Questions
${da}
`;
}

module.exports = generateMarkdown;
