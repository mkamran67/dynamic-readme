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

function writeToFile(fileName, data) {}

async function init() {
  // Variables
  let userAvatar = 'undef';

  // 0. Display App Name
  // introDisplay();

  // 1. Ask for Github Username & Email. ->
  await inquirer.prompt(initQueries).then(async (answers) => {
    // A) fetch Github Avatar Link if Valid-> save avatar link
    let temp = await getUserProfile(answers.userName);

    // B)
    if (!temp.isValid) {
      console.log(temp.message);
      return;
    } else {
      userAvatar = temp.avatar_url;
    }
  });

  if (userAvatar !== 'undef') {
    // 2. Get Project Details.
    await inquirer.prompt(projectQueries).then(async (answers) => {
      //
    });
  }
}
init();
