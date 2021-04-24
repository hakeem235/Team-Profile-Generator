class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        if(typeof name !== "string" || !name.trim().length){
            throw new Error ("Expected 'name' property not to be empty string");
        }
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole(){
        return "Employee";
    }
}
module.exports = Employee;