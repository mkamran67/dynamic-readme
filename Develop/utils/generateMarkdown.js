/* -> Object Structure
 {
  title: 'ReadMe Creator',
  description: "It's a very basic function crap thing magigy",
  installation: 'umm idk i copy past',
  usage: 'something node',
  tests: 'none',
  licenseDescrption: 'only 6 ft tall women can use it',
  licenseBadgeSymbol: 'MIT',
  licenseBadgeColor: 'green',
  contributing: "they can't its too good",
  avatar: 'https://avatars3.githubusercontent.com/u/39231643?v=4',
  email: ''
  }
*/

function generateMarkdown(data) {
  // let tableOfContents = Object.entries(data).forEach(([key, value], index) => {
  //   return index < Object.entries(data).length - 3
  //     ? `[${index}. ${key}](#${key})`
  //     : '';
  // });

  let titleCase = function (title) {
    let temp = title.split(' ').map((el) => {
      console.log(el, 'element');
    });
    console.log(temp);
    return temp.join(' ');
  };

  console.log(titleCase(data.title), '<- Case title');
  return `

# ${data.title}

## Description
${data.description}

## Table of Contents
  

${data.installation ? `## Installation \n ${data.installation}` : ''}

${data.usage ? `## Usage \n ${data.usage}` : ''}

${data.tests ? `## Testing \n ${data.tests}` : ''}

${data.contributing ? `## Contributing \n ${data.contributing}` : ''}

![License Badge](${data.badge})
${data.licenseDescription ? `## License \n ${data.licenseDescription}` : ''}

## Questions
![Avatar](${data.avatar})
Got Questions? You can reach me [here](${data.email})

`;
}

module.exports = generateMarkdown;
