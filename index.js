const inquirer = require('inquirer');
const fs = require('fs');

// const employeeChoice = (answers) =>
// {
// // Add employees to html
// }

// const generateHTML = (answers) =>
// `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     Test document
// </body>
// </html>`

employeesBase = []

const generateReadme = () =>
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <!-- bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        <title>Document</title>
    </head>
    <body>
    <div class="container">
    <div id="employeeRows">
        <div class ="row">
            <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                <div class="card-header">${employeesBase[0].Name}</div>
                <div class="card-body">
                    <h5 class="card-title">Manager</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                <div class="card-header">Header</div>
                <div class="card-body">
                    <h5 class="card-title">Primary card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                <div class="card-header">Header</div>
                <div class="card-body">
                    <h5 class="card-title">Primary card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                <div class="card-header">Header</div>
                <div class="card-body">
                    <h5 class="card-title">Primary card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                <div class="card-header">Header</div>
                <div class="card-body">
                    <h5 class="card-title">Primary card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    </body>
    </html>`

const init = () => {
      try {
        const htmlfile = generateReadme();
        fs.writeFileSync('index.html', htmlfile)
        console.log('Successfully wrote to READMEexample.md');
      } catch (error) {
        console.log(error);
      }
  };


const choice1 = () =>
inquirer.prompt([
    //   prompts for engineer
    {
        type: 'input',
        name: 'Name',
        message: `Enter the engineer's name`,
    },
    {
        type: 'input',
        name: 'ID',
        message: `Enter the engineer's employee ID`,
    },
    {
        type: 'input',
        name: 'Email',
        message: `Enter the engineer's email`,
    },
    {
        type: 'input',
        name: 'Special',
        message: `Enter the engineer's GitHub username`,
    },
    // prompt to add a new employee to the team besides manager
    {
        name: 'employee',
        type: 'confirm',
        message: 'Would you like to add an Employee?'
    }, 
    //   if the previous prompt was answered with 'y' then ask next question
        {
        when: function (response) {
        return response.employee;
        },
        type: 'list',
        name: 'employeetype',
        message: 'Employee Type?',
        choices:["Engineer", "Intern"]
    },
]).then((response) => {
    employeesBase.push(response)
    if(response.employeetype=="Engineer"){
        choice1()
    }
    else if(response.employeetype=="Intern")
    {
        choice2()
    }
    else init()
    console.log(employeesBase[0].Name)
}
)

const choice2 = () =>
    inquirer.prompt([
        //   prompts for intern
        {
            type: 'input',
            name: 'Name',
            message: `Enter the intern's name`,
        },
        {
            type: 'input',
            name: 'ID',
            message: `Enter the intern's employee ID`,
        },
        {
            type: 'input',
            name: 'Email',
            message: `Enter the intern's email`,
        },
        {
            type: 'input',
            name: 'Special',
            message: `Enter the intern's university name`,
        },
        {
            name: 'employee',
            type: 'confirm',
            message: 'Would you like to add an Employee?'
        }, 
        //   if the previous prompt was answered with 'y' then ask next question
            {
            when: function (response) {
            return response.employee;
            },
            type: 'list',
            name: 'employeetype',
            message: 'Employee Type?',
            choices:["Engineer", "Intern"]
        },
    ])
    .then((response) => {
        employeesBase.push(response)
        if(response.employeetype=="Engineer"){
            choice1()
        }
        else if(response.employeetype=="Intern")
        {
            choice2()
        }
        else init()
    }
    )


const promptUser1 = () =>
inquirer.prompt([
    //   prompts for team manager
    {
        type: 'input',
        name: 'Name',
        message: `Enter the team manager's name`,
    },
    {
        type: 'input',
        name: 'ID',
        message: 'Enter the manager employee ID',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'Enter the manager email adress',
    },
    {
        type: 'input',
        name: 'Special',
        message: 'Enter the manager office number',
    },
    // prompt to add a new employee to the team besides manager
    {
        name: 'employee',
        type: 'confirm',
        message: 'Would you like to add an Employee?'
    }, 
    //   if the previous prompt was answered with 'y' then ask next question
        {
        when: function (response) {
        return response.employee;
        },
        type: 'list',
        name: 'employeetype',
        message: 'Employee Type?',
        choices:["Engineer", "Intern"]
    },
], 
).then((response) => {
    employeesBase.push(response)
    if(response.employeetype=="Engineer"){
        choice1()
    }
    else if(response.employeetype=="Intern")
    {
        choice2()
    }
    else init()
}
)

promptUser1()