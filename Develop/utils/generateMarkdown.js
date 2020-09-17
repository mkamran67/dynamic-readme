/* -> Object Structure
{
  title: 'this is a title',
  description: 'git project descr',
  installation: 'step uno',
  usage: 'there is no usage',
  tests: 'none',
  contributing: 'they cant',
  licenseDescrption: 'wadwadawdawd acp[y',
  avatar: 'https://avatars2.githubusercontent.com/u/415313?v=4',
  email: 'usm@gm.co',
  badge: 'https://img.shields.io/badge/license-MIT-green'
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
