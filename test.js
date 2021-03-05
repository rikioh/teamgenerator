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


const choice1 = () =>
inquirer.prompt([
    //   prompts for engineer
    {
        type: 'input',
        name: 'engineerName',
        message: `Enter the engineer's name`,
    },
    {
        type: 'input',
        name: 'engineerID',
        message: `Enter the engineer's employee ID`,
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: `Enter the engineer's email`,
    },
    {
        type: 'input',
        name: 'engineerGithub',
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
    if(response.employeetype=="Engineer"){
        choice1()
    }
    else if(response.employeetype=="Intern")
    {
        choice2()
    }
    else return
}
)

const choice2 = () =>
    inquirer.prompt([
        //   prompts for intern
        {
            type: 'input',
            name: 'internName',
            message: `Enter the intern's name`,
        },
        {
            type: 'input',
            name: 'internID',
            message: `Enter the intern's employee ID`,
        },
        {
            type: 'input',
            name: 'internEmail',
            message: `Enter the intern's email`,
        },
        {
            type: 'input',
            name: 'internUniversity',
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
        if(response.employeetype=="Engineer"){
            choice1()
        }
        else if(response.employeetype=="Intern")
        {
            choice2()
        }
        else return
    }
    )


const promptUser1 = () =>
inquirer.prompt([
    //   prompts for team manager
    {
        type: 'input',
        name: 'managerName',
        message: `Enter the team manager's name`,
    },
    {
        type: 'input',
        name: 'managerID',
        message: 'Enter the manager employee ID',
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'Enter the manager email adress',
    },
    {
        type: 'input',
        name: 'managerOffice',
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
    if(response.employeetype=="Engineer"){
        choice1()
    }
    else if(response.employeetype=="Intern")
    {
        choice2()
    }
    else return
}
)

promptUser1()
// const main = async () => {
//     const inputs = await promptUser1();
//     console.log(inputs);
//     employeesBase.push(inputs)
//     console.log(employeesBase)
//     if(inputs.employeetype==="Engineer"){
//         const inputs1 = await choice1();
//         console.log(inputs1);
//         if(inputs1.employeetype=="Engineer"){
//             choice1()
//         }
//         else if(inputs1.employeetype=="Intern"){
//             choice2()
//         }
//         }
//     else{
//         const inputs2 = await choice2();
//         console.log(inputs2);
//         if(inputs2.employeetype=="Intern"){
//             choice2()
//         }
//         else if(inputs2.employeetype=="Engineer"){
//             choice1()
//         }
//     }
//   }
  
//   main();
