function combine(n1: string | number, n2: string | number) {
  let result;
  if (typeof n1 === "number" && typeof n2 === "number") {
    result = n1 + n2;
  } else {
    // result = n1 + n2;
  }
  return result
}

console.log(combine("a", "b"))

