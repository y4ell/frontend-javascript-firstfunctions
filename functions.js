/* Opdracht 0: voorbeeld */
// Schrijf een functie die de string "Goedemorgen" teruggeeft
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Goedemorgen"

function morningGreeter() {
  return "Goedemorgen";
}

const greeting = morningGreeter();

console.log(greeting);

/* Opdracht 1 */
// Schrijf een functie genaamd getSchool, die de string "Novi Hogeschool" teruggeeft
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Novi Hogeschool"

function school() {
  return "Novi Hogeschool";
}

const schoolName = school();

console.log(schoolName)

/* Opdracht 2 */
// Schrijf een functie genaamd compliment, die jou een complimentje geeft!
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Lekker bezig met die functies, Jan!"

// function compliment(name) {
//   return 'lekker bezig met die functies';
// }
//
// console.log(compliment 'yael')

function giveCompliment() {
  return 'lekker bezig met die functies, Yael'
}

console.log(giveCompliment())

/* Opdracht 3 */
// Schrijf een functie genaamd getGrades, die een array met de cijfers 8, 8.5, 6 en 7 teruggeeft.
// ---- Verwachte uitkomst bij het aanroepen van de functie: [8, 8.5, 6, 7]

const grades = [8, 8.5, 6, 7];

function getGrades() {
  for (let i = 0; i < 4; i++) {
    return grades
  }
}

console.log(getGrades())



/* Opdracht 4 */
// Schrijf een functie genaamd getDetails, die een object met daarin jouw eigen naam en achternaam teruggeeft.
// ---- Verwachte uitkomst bij het aanroepen van de functie: { firstName: 'Jan', lastName: 'Janssen' }

function getDetails() {
return {firstName: "yael", lastName: "ja"}
}

const wholeName = getDetails()
console.log(wholeName)