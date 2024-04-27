class Employee {

    constructor(name, salary, title, manager = null) {
        this.name = name
        this.salary = salary
        this.title = title
        this.manager = manager
        if(manager !== null){
            manager.addEmployee(this)
        }
    }
}



const leo = new Employee('Leonardo', 90000, 'Ninja');
// console.log(leo)

// const raph = new Employee('Raphael', 90000, 'Ninja', splinter);


module.exports = Employee
