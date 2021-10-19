// import { Document } from "./parser/document.js"
import { PrettyPrinter } from "./prettyPrinter/prettyPrinter.js"


const prettyPrinter = new PrettyPrinter()

const input = 'Meningen består. Gör den? JA!'

prettyPrinter.start(input)







/*
const document = new Document()

const string = 'Meningen består av ord. Det gör även denna meningen.'
const string2 = 'Meningen består. Gör den? JA!'
const string3 = 'Meningen består.'
document.parse(string2)

const sentencesObjects = document.getAllSentences()

console.log(sentencesObjects)

console.log('----')

console.log(sentencesObjects[0].getSentenceString())
console.log(sentencesObjects[1].getSentenceString())
console.log(sentencesObjects[2].getSentenceString())

console.log('----')

console.log(document.getAllDotSentences())
console.log(document.getAllQuestionSentences())
console.log(document.getAllExclamationSentences())

console.log('----')

console.log(document.getAllDotSentences()[0].getSentenceString())
console.log(document.getAllQuestionSentences()[0].getSentenceString())
console.log(document.getAllExclamationSentences()[0].getSentenceString())
*/
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