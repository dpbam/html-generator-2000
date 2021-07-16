const inquirer = require("inquirer");

const questions = [
    {
        type: 'checkbox',
        name: 'role',
        message: "Pick the employee's role. (Check one)",
        choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Enter your employee's office number.",
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
        name: 'name',
        message: "What is the Employee's name?",
        validate: employeeName => {
            if (employeeName) {
                return true;
            } else {
                console.log("Try again, por favor.")
                return false;
            }
        }
    },
    {
       type: 'input',
       name: 'id',
       message: "What is this employee's id number?",
       validate: employeeId => {
           if (employeeId) {
               return true;
           } else {
               console.log("Please provide their id number.")
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
    {
        type: 'input',
        name: 'school',
        message: "What school do you go to? (Interns only)",
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
        type: 'input',
        name: 'github',
        message: "What's your GitHub username?",
        when: (answers) => answers.role === 'Engineer',
        validate: employeeGithub => {
            if(employeeGithub) {
                return true;
            } else {
                console.log("Enter that GitHub name please, dude, jeez.")
                return false;
            }
        }
 
    }
]

function init() {
    console.log("Welcome to the Team Profile Generator!\nPlease answer some questions so we can get started.")

    inquirer.prompt(questions)
}