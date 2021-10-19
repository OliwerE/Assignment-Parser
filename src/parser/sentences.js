import { Tokenizer } from "../tokenizer/tokenizer.js"
import { sentenceGrammar } from "../tokenizer/grammars/sentenceGrammar.js"
import { Sentence } from "./sentence.js"

export class Sentences {
    #tokenizer
    #sentenceArray = [] // Alla meningar ?, !, .

  startCreateSentences(input) {
    this.runTokenizer(input)
    this.createAllSentences()
  }

  runTokenizer(input) {
    this.#tokenizer = new Tokenizer(sentenceGrammar)
    this.#tokenizer.startTokenizer(input)
  }

  createAllSentences() {
    // console.log(this.#tokenizer.getActiveToken())
    // loop här för varje sentence tills active token är end token.
    while(true) { // 
      // console.log(this.#tokenizer.getActiveToken().tokenType)
      if (this.#tokenizer.getActiveToken().tokenType === 'END') {
        break
      } else {
        this.createSentence()
      }
    }
  }

  createSentence() {
    let activeToken = this.#tokenizer.getActiveToken()
    const tokenType = activeToken.tokenType
    const sentenceEnd = tokenType !== 'DOT' || tokenType !== 'QUESTION' || tokenType !== 'EXCLAMATION'

    const sentence = new Sentence()
    for (let i = 0; i < 5; i++) { // sentenceEnd
      console.log(activeToken)
      sentence.addToken(activeToken)
      this.#tokenizer.setNextActiveToken()
      activeToken = this.#tokenizer.getActiveToken()
      if (activeToken.tokenType === 'END') {
        // throw exception!!
        break
      }
    }
    this.#sentenceArray.push(sentence)
  }

}


/*

  * Skapar sentence.
  * 

*/