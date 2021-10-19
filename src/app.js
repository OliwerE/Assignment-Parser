import { Document } from "./parser/document.js"

const document = new Document()

const string = 'Meningen består av ord. Det gör även denna meningen.'
const string2 = 'Meningen består. Gör den?'
const string3 = 'Meningen består.'
document.parse(string2)

const sentencesObjects = document.getSentences()
console.log(sentencesObjects)

console.log(sentencesObjects[0].getSentenceString())
console.log(sentencesObjects[0].getSentenceType())

console.log(sentencesObjects[1].getSentenceString())
console.log(sentencesObjects[1].getSentenceType())

/*

 * Bugg: två meningar med samma slut token (.?!) efter varabdra blir oändlig loop.

*/