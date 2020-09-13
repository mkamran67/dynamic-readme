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
      message: 'Usage examples',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Tests',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Tests',
    },
  ],
};

exports.questions = questions;
