function generateMarkdown(data) {
  return `


# ${data.title}

## Description
${data.description}

## Table of Contents

// TODO: Loop here

## Installation
${data.installation}

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
