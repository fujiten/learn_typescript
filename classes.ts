abstract class Department {
  static fiscalYear = 2020
  // private name: string;
  private employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
  }

  abstract describe(this: Department): void 
    // console.log( `Department: ${this.id} ${this.name}`)
  

  static createEmployee(name: string) {
    return { name: name, year: Department.fiscalYear }
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }
}

class ITDpartment extends Department {
  private lastReport: string

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport

    }
    throw new Error('No Report found')
  }

  set mostRecentReport(value: string) {
    if (value) {
      this.lastReport = value
    } else {
      throw new Error('Hey, where is your value')
    }
  }

  describe() {
    console.log(`hello ${this.id}`)
  }

  constructor(id: string, public reports: string[]){
    super(id, 'IT')
    this.lastReport = reports[0]
  }
}

// const accouting = new Department('D1', 'Accouting');
const accounting = new ITDpartment('I1', ['admin'])
accounting.mostRecentReport = 'report'
console.log(accounting)

console.log('こんにちは')

console.log()
