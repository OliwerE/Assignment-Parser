import { Document } from "./parser/document.js"

const document = new Document()

const string = 'Meningen består av ord. Det gör även denna meningen.'
const string2 = 'Meningen består. Gör den? JA!'
const string3 = 'Meningen består.'
document.parse(string2)

const sentencesObjects = document.getAllSentences()

console.log(sentencesObjects)

/*
console.log(sentencesObjects[0].getSentenceString())
console.log(sentencesObjects[0].getEndType())

console.log(sentencesObjects[0].getActiveSentenceToken())

sentencesObjects[0].setNextActiveSentenceToken()
console.log(sentencesObjects[0].getActiveSentenceToken())

sentencesObjects[0].setNextActiveSentenceToken()
console.log(sentencesObjects[0].getActiveSentenceToken())

sentencesObjects[0].setNextActiveSentenceToken()
console.log(sentencesObjects[0].getActiveSentenceToken())

sentencesObjects[0].setPrevActiveSentenceToken()
console.log(sentencesObjects[0].getActiveSentenceToken())

sentencesObjects[0].setPrevActiveSentenceToken()
console.log(sentencesObjects[0].getActiveSentenceToken())

sentencesObjects[0].setPrevActiveSentenceToken()
console.log(sentencesObjects[0].getActiveSentenceToken())

sentencesObjects[0].setPrevActiveSentenceToken()
console.log(sentencesObjects[0].getActiveSentenceToken())
*/


// console.log(sentencesObjects[1].getSentenceString())
// console.log(sentencesObjects[1].getEndType())

// console.log(sentencesObjects[2].getSentenceString())
// console.log(sentencesObjects[2].getEndType())

/*

 * Bugg: två meningar med samma slut token (.?!) efter varabdra blir oändlig loop.

*/