interface Greetable {
  readonly name: string;
  outputName?: string

  greet(phrase: string): void;
  hiFive?(): void
}

class Person implements Greetable {
  name: string;
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  greet(phrase: string) {
    console.log(phrase + this.name + this.age)
  }
}

let user1: Person
user1 = new Person('Max', 5)

// user1 = {
//   name: 'max',

//   greet(phrase) {
//     console.log(phrase + this.name)
//   }
// }

user1.greet('hello ')
