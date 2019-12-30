function Logger(constructor: Function){
  console.log(constructor)
}

@Logger
class Peter {
  name = 'Max'

  constructor() {
    console.log('hello' + this.name)
  }
}

