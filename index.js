const inquirer = require('inquirer');
const fs = require('fs');

employeesBase = []

const managerCard = () => 
    `<div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
        <div class="card-header">${employeesBase[i].Name}</div>
        <div class="card-body">
            <h5 class="card-title">Manager</h5>
            <h5 class="card-title"><a href="mailto:${employeesBase[i].Email}">${employeesBase[i].Email}</a></h5>
            <h5 class="card-title">${employeesBase[i].ID}</h5>
            <h5 class="card-title">${employeesBase[i].Special}</h5>
        </div>
    </div>`

const engineerCard = () =>
`<div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
<div class="card-header">${employeesBase[i].Name}</div>
<div class="card-body">
    <h5 class="card-title">Engineer</h5>
    <h5 class="card-title"><a href="mailto:${employeesBase[i].Email}">${employeesBase[i].Email}</a></h5>
    <h5 class="card-title">${employeesBase[i].ID}</h5>
    <h5 class="card-title"><a href="https://github.com/${employeesBase[i].Special}"></a>https://github.com/${employeesBase[i].Special}</h5>
</div>
</div>`

const internCard = () =>
`<div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
<div class="card-header">${employeesBase[i].Name}</div>
<div class="card-body">
    <h5 class="card-title">Intern</h5>
    <h5 class="card-title"><a href="mailto:${employeesBase[i].Email}">${employeesBase[i].Email}</a></h5>
    <h5 class="card-title">${employeesBase[i].ID}</h5>
    <h5 class="card-title">College: ${employeesBase[i].Special}</h5>
</div>
</div>`

const fullhtmlpush = []

const cardGenerator = () => {
    for(i=0;i<employeesBase.length;i++){
        if(employeesBase[i].type=="Manager"){
            fullhtmlpush.push(managerCard())
        }
        else if(employeesBase[i].type=="Engineer"){
            fullhtmlpush.push(engineerCard())
        }
        else if(employeesBase[i].type=="Intern"){
            fullhtmlpush.push(internCard())
        }
        else return
    }
    
}

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
            ${fullhtmlpush.join()}
        </div>
    </div>
    </div>
    </body>
    </html>`

const init = () => {
      try {
        cardGenerator()
        const htmlfile = generateReadme();
        fs.writeFileSync('index.html', htmlfile)
        console.log('Successfully wrote to index.html');
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
    if(response.employeetype=="Engineer"){
        response.type = "Engineer"
        employeesBase.push(response)
        choice1()
    }
    else if(response.employeetype=="Intern")
    {
        response.type = "Engineer"
        employeesBase.push(response)
        choice2()
    }
    else
    response.type = "Engineer"
    employeesBase.push(response) 
    init()
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
        if(response.employeetype=="Engineer"){
            response.type = "Intern"
            employeesBase.push(response)
            choice1()
        }
        else if(response.employeetype=="Intern")
        {
            response.type = "Intern"
            employeesBase.push(response)
            choice2()
        }
        else
        response.type = "Intern"
        employeesBase.push(response) 
        init()
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
    response.type = "Manager"
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

module.exports = employeesBase;