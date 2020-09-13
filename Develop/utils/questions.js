const chalk = require('chalk');

// Questions
const questions = {
  // ->
  initQueries: [
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
          return 'Please enter a valid email address';
        }
      },
    },
    // {
    //   type: 'checkbox',
    //   name: 'toSave',
    //   message: 'Would you like to save these for future use (default resets saved data)',
    // },
  ],

  // ->
  // - At least one badge ✅
  // - Project title ✅
  // - Description ✅
  // - Table of Contents -> Need to generate after questions
  // - Installation ✅
  // - Usage ✅
  // - License ✅
  // - Contributing ✅
  // - Tests ✅
  // - Questions
  //   - User GitHub profile picture
  //   - User GitHub email
  projectQueries: [
    {
      type: 'input',
      name: 'title',
      message: "What's the project title",
      validate: function (title) {
        if (title.trim().length >= 3) {
          return true;
        }
        return 'Please enter at least 3 characters.';
      },
    },
    {
      type: 'input',
      name: 'description',
      message: "Project's description",
      validate: function (description) {
        if (description.length >= 3) {
          return true;
        }
        return 'Please enter at least 3 characters.';
      },
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Installation instructions',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Code usage examples',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Tests',
    },
    {
      type: 'input',
      name: 'licenseDescrption',
      message: 'Your license discription',
    },
    {
      type: 'input',
      name: 'licenseBadgeSymbol',
      message: 'License badge symbol (i.e. MIT, Apache 2, GPL)',
    },
    {
      type: 'rawlist',
      name: 'licenseBadgeColor',
      message: 'Chose a license badge color',
      choices: [
        `brightgreen`,
        `green`,
        `yellowgreen`,
        `yellow`,
        `orange`,
        `red`,
        `lightgrey`,
        `blue`,
      ],
      validate: function (answer) {
        if (answer.length < 1) {
          return 'You must choose at least one color.';
        }

        return true;
      },
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How others can contribute to your project: ',
    },
  ],
};

exports.questions = questions;
