type NobDeveloper = {
  name: string
}

type JuniorDeveloper = NobDeveloper & {
  expertise: string
  experience: number
}

type NextLevelDeveloper = JuniorDeveloper & {
  leadershipExperience: number
  level: "junior" | "mid" | "senior"
}

const newDeveloper: NobDeveloper | JuniorDeveloper = {
  name: "Moznu Mia",
  expertise: "Javascript",
  experience: 1,
}

const developer: NextLevelDeveloper = {
  name: "Next Bhai",
  expertise: "Typescript",
  experience: 2,
  leadershipExperience: 1,
  level: "senior",
}
