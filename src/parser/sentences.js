import { Tokenizer } from "../tokenizer/tokenizer.js"
import { sentenceGrammar } from "../tokenizer/grammars/sentenceGrammar.js"

export class Sentences {
  constructor() {
    this.tokenizer
    this.sentenceArray = [] // Alla meningar ?, !, .
  }

  startCreateSentences(input) {
    this.runTokenizer(input)
    this.createAllSentences()
  }

  runTokenizer(input) {
    this.tokenizer = new Tokenizer(sentenceGrammar)
    this.tokenizer.startTokenizer(input)
  }

  createAllSentences() {
    console.log(this.tokenizer.getActiveToken())
    // loop här för varje sentence tills active token är end token.
  }

  createSentence() {

  }

}


/*

  * Skapar sentence.
  * 

*/