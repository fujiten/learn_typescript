/// <reference path="base-component.ts" />

namespace App {

  export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement>{
    titleInputElement: HTMLInputElement
    descriptionInputElement: HTMLInputElement
    peopleInputElement: HTMLInputElement

    constructor(){
      super('project-input', 'app', true, 'user-input')

      this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement
      this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement
      this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement

      this.configure()
    }

    renderContent() {

    }

    configure() {
      this.element.addEventListener('submit', this.submitHundler.bind(this))
    }

    private clearInputs() {
      this.titleInputElement.value = ''
      this.descriptionInputElement.value = ''
      this.peopleInputElement.value = ''
    }

    private gatherUserInput(): [string, string, number] | void {
      const enteredTitle = this.titleInputElement.value
      const enteredDescription = this.descriptionInputElement.value
      const enteredPeople = this.peopleInputElement.value

      const titleValidatable: Validatable = {
        value: enteredTitle,
        required: true
      }

      const descriptionValidatble: Validatable = {
        value: enteredDescription,
        required: true,
        minLength: 5
      }
      if (
        !validate(titleValidatable) ||
        !validate(descriptionValidatble)
      ) {
        alert('invalid')
        return
      } else {
        return [enteredTitle, enteredDescription, +enteredPeople]
      }
    }

    private submitHundler(event: Event) {
      event.preventDefault();
      const userInput = this.gatherUserInput();
      if (Array.isArray(userInput)) {
        const [title, desc, people] = userInput
        projectState.addProject(title, desc, people)
        this.clearInputs()
      }
    }
  }
}
