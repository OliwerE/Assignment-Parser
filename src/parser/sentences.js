import { Tokenizer } from "../tokenizer/tokenizer.js"
import { sentenceGrammar } from "../tokenizer/grammars/sentenceGrammar.js"
import { Sentence } from "./sentence.js"

export class Sentences {
    #tokenizer
    #sentenceArray = [] // Alla meningar ?, !, .

  getSentences() {
    return [...this.#sentenceArray]
  }

  startCreateSentences(input) {
    this.#runTokenizer(input)
    this.#createAllSentences()
  }

  #runTokenizer(input) {
    this.#tokenizer = new Tokenizer(sentenceGrammar)
    this.#tokenizer.startTokenizer(input)
  }

  #createAllSentences() {
    while(true) {
      if (this.#tokenizer.getActiveToken().tokenType === 'END') {
        break
      } else {
        this.#createSentence()
      }
    }
  }

  #createSentence() {
    let activeToken = this.#tokenizer.getActiveToken()
    const sentence = new Sentence()
    while(true) {
      sentence.addToken(activeToken)
      if (activeToken.tokenType !== 'WORD') {
      this.#tokenizer.setNextActiveToken()
      activeToken = this.#tokenizer.getActiveToken()
      break
      } else {
      this.#tokenizer.setNextActiveToken()
      activeToken = this.#tokenizer.getActiveToken()
      }
    }
    this.#sentenceArray.push(sentence)
  }

}