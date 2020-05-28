const fs = require("fs");
const readline = require("readline");
const inquirer = require('inquirer');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("What's your name? ", (name) => {
//   // TODO: Log the answer in a database
//   rl.question("What's your year of birth? ", (age) => {
//     rl.question("What's your home town? ", (hometown) => {
//       console.log(
//         `Thank you. Hello ${name}, so you are ${age} year old and from ${hometown}`
//       );
//       rl.close();
//     });
//   });
// });

inquirer
  .prompt([
    {
      name: "name",
      message: "What's your name? ",
    },
    {
      name: "age",
      message: "What's your year of birth? ",
    },
    {
      name: 'hometown',
      message: "What's your home town? ",
    },
  ])
  .then(answers => {
    const { name, age, hometown } = answers;
    console.log(`Thank you. Hello ${name}, so you are ${age} year old and from ${hometown}`);
  });