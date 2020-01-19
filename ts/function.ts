function addee(n1: number, n2: number): number {
  return n1 + n2
}

function printResult(num: number): void {
  console.log('result: ' + num)
}

printResult(addee(5, 12))

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2
  const value = cb(result);
  console.log(value)
}

let combineValue: (a: number, b: number) => number;

combineValue = addee;
// combineValue = printResult

addAndHandle(15, 20, (result) => {
  return result
})

