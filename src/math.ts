// create add related work function

const addFunction = (number1: number, number2: number): number => {
  const addResult = number1 + number2
  console.log("Add Result:", addResult)
  return addResult
}
addFunction(3, 2)

// create minus related work function

const minusFunction = (number1: number, number2: number) => {
  const minusResult = number1 - number2
  console.log("Minus Result", minusResult)
  return minusResult
}

minusFunction(20, 10)

const multipleFunction = (number1: number, number2: number) => {
  const multipleResult = number1 * number2
  console.log("Multiple Result", multipleResult)
  return multipleResult
}

multipleFunction(3, 2)

const divisionFunction = (number1: number, number2: number) => {
  const divisionResult = number1 / number2
  console.log("Division Result", divisionResult)
  return divisionResult
}

divisionFunction(6, 2)

const allMathFunction = (number1: number, number2: number) => {
  const allMathFunctionAdd = number1 + number2
  if (number1 < number2) {
    console.log("number1 more then large number2", number1, number2)
  }
  const allMathFunctionMinus = number1 - number2
  const allMathFunctionMultiple = number1 * number2
  const allMathFunctionDivision = number1 / number2
  const divisionRound = Math.round(allMathFunctionDivision)

  console.log(
    "Add",
    allMathFunctionAdd,
    "multiple",
    allMathFunctionMultiple,
    "division",
    divisionRound,
    "minus",
    allMathFunctionMinus
  )

  return allMathFunction
}

allMathFunction(20, 50)
