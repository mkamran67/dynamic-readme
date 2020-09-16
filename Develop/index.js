// Dependencies Imports
const chalk = require('chalk');
const figlet = require('figlet');
const fs = require('fs');
const inquirer = require('inquirer');
const clear = require('clear');
const Configstore = require('configstore');
const packageJson = require('./package.json');

// Modules Imports
const getUserProfile = require('./utils/api');
const {
  questions: { initQueries, projectQueries },
} = require('./utils/questions');
const generateMarkdown = require('./utils/generateMarkdown');

// Configstore -> To or Not To store User Settings
const config = new Configstore(packageJson.name);

function introDisplay() {
  figlet(`Project MarkDown`, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(chalk.rgb(255, 136, 0).bold(data));
    console.log(`\n`);
  });
}

function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data, 'utf8', (err) => console.log(err));
}

async function init() {
  // Variables
  let userAvatar = 'undef';
  let userEmail = '';
  let queryData = {};
  let betterObject = {};
  let licenseBadge = 'https://img.shields.io/badge/license-'; // -> https://img.shields.io/badge/license-MIT-orange

  // 0. Display App Name
  // introDisplay();

  // 1. Ask for Github Username & Email. ->
  await inquirer.prompt(initQueries).then(async (answers) => {
    // A) fetch Github Avatar Link if Valid-> save avatar link
    let temp = await getUserProfile(answers.userName);
    userEmail = answers.email;

    // B)
    if (!temp.isValid) {
      console.log(temp.message);
      return;
    } else {
      userAvatar = temp.avatar_url;
    }
  });

  // 2. Get Project Details.
  if (userAvatar !== 'undef') {
    await inquirer.prompt(projectQueries).then(async (answers) => {
      queryData = answers;
    });
  }
  // One Data Object
  queryData.avatar = userAvatar;
  queryData.email = userEmail;

  // Create an a better object -> remove empty pairs -> Append badge
  for (const [key, val] of Object.entries(queryData)) {
    if (key === 'licenseBadgeSymbol') {
      licenseBadge += val.toUpperCase();
    } else if (key === 'licenseBadgeColor') {
      licenseBadge += `-${val}`;
    } else if (val !== '') {
      betterObject[`${key}`] = val;
    }
  }

  betterObject.badge = licenseBadge;

  console.log(betterObject);

  // Generate Markdown
  let readmeData = generateMarkdown(betterObject);

  writeToFile('README.md', readmeData);

  console.log(readmeData);
}
init();
