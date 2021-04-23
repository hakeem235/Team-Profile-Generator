const Employee = require("./Employee");
// This Engineer class extends Enployee class, so we don't need redfine the "shared" properties here
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return "Engineer";
    }
}
module.exports = Engineer;