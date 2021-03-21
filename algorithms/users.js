class User {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName
        this.lastName = lastName 
        this.salary = salary
    }
}

class Company {
    constructor() {
        this.employees = []
    }

    addEmployee(per) {
        this.employees.push(per)
    }

    removeEmployee(per) {
        const personIndex = this.employees.indexOf(per)
        if(personIndex !== -1) {
            this.employees.splice(personIndex, 1)
            return true
        }
        return false
    }

    addSalary(person, newSalary) {
        if(this.employees[person] !== null) person.salary = newSalary
        else return "This Employee Is Not In Our System."
    }
}

const werthPhoto = new Company()
const employee1 = new User("Matt", "Werth", 0)
const employee2 = new User("Laurie", "Werth", 0)

werthPhoto.addEmployee(employee1)
werthPhoto.addEmployee(employee2)

werthPhoto.removeEmployee(employee1)

werthPhoto.addSalary(employee2, 30000)

console.log(werthPhoto)
