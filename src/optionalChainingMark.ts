//ternary operator
const manAge: number = 15

if (manAge >= 18) {
  console.log("Yes")
} else {
  console.log("No")
}

const isAdult = manAge >= 18 ? " Yes" : "No"
console.log(isAdult)

// Nullish Coalesce Operator
// Null and Undefined

const isAuthenticatedUser = ""
const userName = isAuthenticatedUser ?? "Guest"
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : "Guest"

console.log({ userName }, { userName2 })

type man = {
  name: string
  manAge: number
  address: {
    city: "NO City"
    road: "No Road"
    home?: ""
  }
}

const man1: man = {
  name: "Man",
  manAge: 100,
  address: {
    city: "NO City",
    road: "No Road",
  },
}

const home = man1?.address?.home ?? "No Home" // default 'No Home'
console.log({ home })
