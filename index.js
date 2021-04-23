const inquirer = require("inquirer");
const fs = require("fs");
// loading our classes 
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// The Employee team data will be pushed in this array
const teamMembers = [];

let manager;
let teamTitle;
// Here we prompt the user basic info about the team

function managerData() {
    inquirer.prompt([
        {
            type:"input",
            message:"What is the name of your team ?",
            name:"teamTitle"
        },
        {
            type:"input",
            message:"Who is the manager of this team ?",
            name:"managerName"
        },
        {
            type:"input",
            message:"Enter the manager's id ?",
            name:"managerId"
        },
        {
            type:"input",
            message:"Enter the manager's email ?",
            name:"managerEmail"
        },
        {
            type:"input",
            message:"Enter the manager's email ?",
            name:"managerEmail"
        },
        {
            type:"input",
            message:"Enter the manager's office number ?",
            name:"officeNumber"
        }
    ]).then(managerAnswers => {
        manager = new Manager(managerAnswers.managerName, managerAnswers.managerId, managerAnswers.managerEmail, managerAnswers.officeNumber);
        teamTitle = managerAnswers.teamTitle;
        console.log("Please enter the information about your team members");
        employeeData();

    });
}

// Now we ask the user(manager) about other team members basic information.
function employeeData() {
    inquirer.prompt([
        {
            type:"list",
            message:"Choose the employee's role",
            name:"employeeRole",
            choices:["Engineer", "Intern"]
        },
        // The following questions are derived based on the above employee Role
        {
            type:"input",
            message:"What is the name of the employee?",
            name:"employeeName"
        },
        {
            type:"input",
            message:"Enter the employee's ID",
            name:"employeeId"
        },
        {
            type:"input",
            message:"Enter the employee's email",
            name:"employeeEmail"
        },
        {
            type:"input",
            message:"What is the Engineer's Github?",
            name:"github",
            when: (userInput) => userInput.employeeRole === "Engineer"
        },
        {
            type:"input",
            message:"What is the Intern's school?",
            name:"school",
            when:(userInput) => userInput.employeeRole === "Intern"
        },
        {
            type:"confirm",
            message:"Would You like to add more employee to your team?",
            name:"newEmployee"
        }

    ]).then(answers => {
        // Here we create a new employee object using classes (Engineer and Intern) and push the to the team member array
        if(answers.employeeRole === "Engineer"){
            const employee = new Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.github);
            teamMembers.push(employee);
        }
        else if(answers.employeeRole === "Intern"){
            const employee2 = new Intern(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.school);
            teamMembers.push(employee2);
        }
        // Here we will call back the employeeData() if the user wants to add more employee to the team otherwise we render the HTML.
        if(answers.newEmployee === true){
            employeeData();
        }
        // Render HTML
        else{
            var main = fs.readFileSync("./templates/main.html", "utf8");
            //Here we use the replace  method returns a new string with some or all matches of a pattern replaced by a replacement

            //
            main = main.replace(/{{teamTitle}}/g, teamTitle);

            // render all the manager information in the manager html crad class.
            var managerCard = fs.readFileSync("./templates/manager.html", "utf8");
            managerCard = managerCard.replace('{{ name }}', manager.getName());
            managerCard = managerCard.replace('{{ role }}', manager.getRole());
            managerCard = managerCard.replace('{{ id }}', manager.getId());
            managerCard = managerCard.replace('{{ email }}', manager.getEmail());
            managerCard = managerCard.replace('{{ officeNumber }}', manager.getOfficeNumber());

            //Here we append all the team members after the manager
            var cards = managerCard;
            for(var i= 0; i < teamMembers.length; i++){
                var employee = teamMembers[i];
                cards += renderEmployee(employee);
            }

            // Add team in the main.html and outputs in team.html
            main = main.replace('{{cards}}' , cards);

            fs.writeFileSync("./output/team.html", main);
            console.log("File is generated Successfully!");

        }

    });
}
// This function is render the intern and engineer employees
function renderEmployee(employee){
    // Here we render the engineer.html
    if(employee.getRole() === "Engineer"){
        var engineerCard = fs.readFileSync("./templates/engineer.html", "utf8");
        engineerCard = engineerCard.replace('{{ name }}', employee.getName());
        engineerCard = engineerCard.replace('{{ role }}', employee.getRole());
        engineerCard = engineerCard.replace('{{ id }}', employee.getId());
        engineerCard= engineerCard.replace('{{ email }}', employee.getEmail());
        engineerCard = engineerCard.replace('{{ github }}', employee.getGithub());
        return engineerCard;
    }
    else if(employee.getRole() === "Intern"){
        var internCard = fs.readFileSync("./templates/intern.html", "utf8");
        internCard = internCard.replace('{{ name }}', employee.getName());
        internCard = internCard.replace('{{ role }}', employee.getRole());
        internCard = internCard.replace('{{ id }}', employee.getId());
        internCard = internCard.replace('{{ email }}', employee.getEmail());
        internCard = internCard.replace('{{ school }}', employee.getSchool());
        return internCard;
    }
}
managerData();

