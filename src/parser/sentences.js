import { ActiveToken } from "../tokenizer/activeToken.js"
import { sentenceGrammar } from "../tokenizer/grammars/sentenceGrammar.js"
import { Sentence } from "./sentence.js"

export class Sentences {
    #tokenizer
    #sentenceArray = []

  getSentences() {
    return [...this.#sentenceArray]
  }

  startCreateSentences(input) {
    this.#runTokenizer(input)
    this.#createAllSentences()
  }

  #runTokenizer(input) {
    this.#tokenizer = new ActiveToken(sentenceGrammar)
    this.#tokenizer.start(input)
  }

  #createAllSentences() {
    while(true) {
      const activeToken = this.#tokenizer.getActiveToken()
      if (activeToken.getTokenType() === 'END') {
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
      if (activeToken.getTokenType() !== 'WORD') {
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
