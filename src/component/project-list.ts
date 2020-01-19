/// <reference path="base-component.ts" />

namespace App {

  export class ProjectList extends Component<HTMLDivElement, HTMLElement>
  implements DragTarget {
  assignedProjects: Project[]

  constructor(private type: 'active' | 'finished'){
    super('project-list', 'app', false, `${type}-projects`)
    this.assignedProjects = []

    this.configure()
    this.renderContent()
  }

  dragOverHandler(event: DragEvent) {
    if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
      event.preventDefault()
      const listEl = this.element.querySelector('ul')!
      listEl.classList.add('droppable')
    }
  }

  dropHandler(event: DragEvent): void {
    const prjId = event.dataTransfer!.getData('text/plain')
    projectState.moveProject(
      prjId, 
      this.type === 'active' ? ProjectStatus.Active : ProjectStatus.Finished)
  }

  dragLeaveHandler(_: DragEvent) {
    const listEl = this.element.querySelector('ul')!
    listEl.classList.remove('droppable')
  }


  configure() {
    this.element.addEventListener('dragover', this.dragOverHandler.bind(this))
    this.element.addEventListener('dragleave', this.dragLeaveHandler.bind(this))
    this.element.addEventListener('drop', this.dropHandler.bind(this))

    projectState.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter(prj => {
        if (this.type === 'active') {
          return prj.status === ProjectStatus.Active
        } else {
          return prj.status === ProjectStatus.Finished
        }
      })
      this.assignedProjects = relevantProjects
      this.renderProject()
    })
  }

  renderContent() {
    const listId = `${this.type}-project-list`
    this.element.querySelector('ul')!.id = listId
    this.element.querySelector('h2')!.textContent = 
      this.type.toUpperCase() + ' Project'
  }

  private renderProject() {
    const listEl = document.getElementById(`${this.type}-project-list`) as HTMLUListElement
    listEl.innerHTML = ''
    for (const prjItem of this.assignedProjects) {
      new ProjectItem(this.element.querySelector('ul')!.id, prjItem)
    }
  }


  }
}
