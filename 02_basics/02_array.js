const marvel_heros = ["thor","ironman", "spiderman"]
const dc_heros = ["spiderman","flash","batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros)
console.log(marvel_heros[3][1])

const allheros = marvel_heros.concat(dc_heros)
console.log(allheros)

const ALLHEROS = [...marvel_heros , ...dc_heros]
console.log(ALLHEROS)

