// Imports
const chalk = require('chalk');
const figlet = require('figlet');
const fs = require('fs');
const axios = require('axios');
const inquirer = require('inquirer');

const initQueries = [
  {
    type: 'input',
    name: 'userName',
    message: "What's your Github username",
    validate: function (userName) {
      if (userName.trim() !== '') {
        return true;
      }
      return 'Please enter a valid Github username';
    },
  },
  {
    type: 'input',
    name: 'email',
    message: "What's your Github email",
    validate: function (email) {
      const regCheckEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      if (regCheckEmail.test(String(email).toLowerCase())) {
        return true;
      } else {
        return 'Please enter a valid Github email';
      }
    },
  },
];

const projectQueries = [
  {
    type: 'input',
    name: 'title',
    message: 'Project title',
    validate: function (message) {
      if (message.trim().length >= 3) {
        return true;
      }
      return 'Please enter at least 3 characters.';
    },
  },
];

function writeToFile(fileName, data) {}

function init() {
  let userEmail = {};

  // 0. Display App Name
  introDisplay();
  // 1. Ask for Github Username & Email. -> 
  setTimeout(() => {
    inquirer
      .prompt(initQueries)
      .then((answers) =>
        answers.email
          ? (userEmail = answers.email)
          : userEmail = {error : true, message: }
      );
  }, 700);

  // 2. Get Project Details.
}

init();

function introDisplay() {
  figlet(`README.md Generator`, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(chalk.rgb(255, 136, 0).bold(data));
    console.log(`\n`);
  });
}
