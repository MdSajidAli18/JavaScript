const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Batman", "Superman", "Flash"]

marvel_heros.push(dc_heros)
console.log(marvel_heros); // output: [ 'Thor', 'Ironman', 'Spiderman', [ 'Batman', 'Superman', 'Flash' ] ]

marvel_heros.concat(dc_heros)
console.log(marvel_heros); // output: [ 'Thor', 'Ironman', 'Spiderman', [ 'Batman', 'Superman', 'Flash' ] ]


const cartoon1 = ["Motu", "Patlu", "Jhatka"]
const cartoon2 = ["Doraemon", "Sizuka", "Gian"]
const allCharacters = cartoon1.concat(cartoon2)
console.log(allCharacters); // output: [ 'Motu', 'Patlu', 'Jhatka', 'Doraemon', 'Sizuka', 'Gian' ]

const all_characters = [...cartoon1, ...cartoon2]
console.log(all_characters); // output: [ 'Motu', 'Patlu', 'Jhatka', 'Doraemon', 'Sizuka', 'Gian' ]


const originalArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10, 11]]
const updatedArray = originalArray.flat(Infinity)
console.log(updatedArray); // output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]



console.log(Array.isArray("Sajid")) // output: false
console.log(Array.from("Sajid")); // output: [ 'S', 'a', 'j', 'i', 'd' ]
console.log(Array.from({name: "Sajid"})); // output: []


let score1= 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // output: [ 100, 200, 300 ]