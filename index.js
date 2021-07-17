const inquirer = require("inquirer");
const { writeFile } = require("../html-generator-2000/utils/generate-site");
const fs = require('fs');
const generatePage = require('./src/page-template');

const questionsArray = [];

const managerPrompts = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name, who leads this team?",
            validate: managerName => {
                if (managerName) {
                    return true;
                } else {
                    console.log("Try again, por favor. Enter the manager's name.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is this manager's id number?",
            validate: managerId => {
                if (managerId) {
                    return true;
                } else {
                    console.log("Please provide the manager's id number.")
                    return false;
                }
            }  
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter your manager's email address.",
            validate: managerEmail => {
                if (managerEmail) {
                    return true;
                } else {
                    console.log("Just put their email address. Sigh...")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the manager's office number.",
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log("Oops. You forgot to put their office number. Try again.")
                    return false;
                }
            }
        },
        
        {
            type: 'input',
            name: 'email',
            message: "Enter your employee's email address.",
            validate: employeeEmail => {
                if (employeeEmail) {
                    return true;
                } else {
                    console.log("Just put their email address. Sigh...")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter your employee's office number.",
            when: (answers) => answers.role === 'Manager', 
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log("Oops. You forgot to put their office number. Try again.")
                    return false;
                }
            }
        },
    ])
    .then(managerData => {
        const { name, id, email, officeNumber } = managerData;
        const manager = new Manager (name, id, email, officeNumber);

        questionsArray.push(manager);
        
    })
};

const addEmployee = () => {
    console.log(`
    =================
    Now we'll add employees to the team
    =================
    `);

    // If there's no 'projects' array property, create one
    // if (!portfolioData.projects) {
    //     portfolioData.projects = [];
    //     }

    return inquirer.prompt([
        {   
            type: "checkbox",
            name: 'role',
            message: "Pick the role the employee has:",
            choices: ['Engineer', "Intern"]
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?",
            validate: employeeName => {
                if (employeeName) {
                    return true;
                } else {
                    console.log("Try again, por favor. Enter the manager's name.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID#:",
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log("Go ahead. Give us the ID#. We promise not to sell this info.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter your employee's email address.",
            validate: function (email) {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

                if (valid) {
                    return true;
                } else {
                    console.log("Please enter a valid email")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What's the employee's GitHub username?",
            when: (answers) => answers.role === 'Engineer',
            validate: employeeGithub => {
                if(employeeGithub) {
                    return true;
                } else {
                    console.log("Enter that GitHub name please, dude, jeez.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What school does the intern go to?",
            when: (answers) => answers.role === 'Intern',
            validate: employeeSchool => {
                if(employeeSchool) {
                    return true;
                } else {
                    console.log("Please enter the name of your school.")
                    return false;
                };
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddMoreEmployee',
            message: "Would you like to add any more team members?",
            default: false
        }
    ])

    .then(employeeData => {

        let { name, id, role, github, school, confirmAddMoreEmployee } = employeeData;
        let employee;

        if (role === "Engineer") {

        }
    })

    promptUser()
        .then(pageHTML => {
            return writeFile(pageHTML);
        })
        .then(writeFileResponse => {
            console.log(writeFileResponse);
            return copyFile();
        })
        .then(copyFileResponse => {
            console.log(copyFileResponse);
        })
        .catch(err => {
            console.log(err);
        })

};   

// or should I do something like this where questions is a const variable established as the array of questions?
function init(questions) {
    console.log("Welcome to the Team Profile Generator!\nPlease answer some questions so we can get started.")
    inquirer.prompt(questions)
    

    
}

