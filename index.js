const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () =>
  inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: `Enter the team manager's name`,
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter the manager employee ID',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter the manager email adress',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the manager office number',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Would you like to add another employee?',
        choices:["Engineer", "Intern", "No more employees"],
    },
  ]);

const employeeChoice = (answers) =>
{
// Add employees to html
}

const generateHTML = (answers) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    Test document
</body>
</html>`

const init = () => {
  promptUser().then((answers) => {
    try {
    //   const employees = employeeChoice(answers)
      const md = generateHTML(answers);
      fs.writeFileSync('employeeList.html', md);
      console.log('Successfully wrote to employeeList.html');
    } catch (error) {
      console.log(error);
    }
  });
};

init();
