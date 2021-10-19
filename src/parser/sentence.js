import { ActiveToken } from "./activeToken.js"

export class Sentence extends ActiveToken { // extend active token klass? // extends ActiveToken
  #tokens = []

  addToken(token) {
    this.#tokens.push(token)
  }

  getSentenceString() {
    let sentence = ''
    for (let i = 0; i < this.#tokens.length; i++) {
      if (this.#tokens[i].tokenType === 'END') {
        // exception!!
      } else if (this.#tokens[i].tokenType !== 'WORD' || i === 0) {
        sentence += this.#tokens[i].value
      } else {
        sentence += ' ' + this.#tokens[i].value
      }
    }
    return sentence
  }

  // metod:  Få sentence som sträng

  // metod:  stega igenom word objekt
}