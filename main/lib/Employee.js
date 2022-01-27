class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    getName() {
        if(typeof this.name !== 'string') {
            return 'Name is not a string'
        }
        return this.name
    }
    getId() {
        return parseInt(this.id)
    }
    getEmail() {
        if(this.email.endsWith('.com' || '.org' || '.edu' || '.gov')) {
            return this.email
        }
        return 'Email is not Valid'
    }
    getRole() {
        return 'Employee'
    }
}


module.exports = Employee