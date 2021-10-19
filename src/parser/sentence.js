export class Sentence {
  #tokens = []
  #activeSentenceToken

  addToken(token) {
    this.#tokens.push(token)
  }

  getEndType() {
    return this.#tokens[this.#tokens.length - 1].tokenType
  }

  getSentenceString() {
    let sentence = ''
    for (let i = 0; i < this.#tokens.length; i++) {
      if (this.#tokens[i].tokenType === 'END') {
        throw new Error('Token type END found in sentence.')
      } else if (this.#tokens[i].tokenType !== 'WORD' || i === 0 ) {
        sentence += this.#tokens[i].value
      } else {
        sentence += ' ' + this.#tokens[i].value
      }
    }
    return sentence
  }

  getActiveSentenceToken() {
    if (this.#activeSentenceToken === undefined) {
      this.#activeSentenceToken = this.#tokens[0]
    }
    return this.#activeSentenceToken
  }

  setNextActiveSentenceToken() {
    const currentIndex = this.#tokens.indexOf(this.#activeSentenceToken)
    if (currentIndex === (this.#tokens.length - 1)) {
      this.#activeSentenceToken = this.#tokens[0]
    } else {
      this.#activeSentenceToken = this.#tokens[currentIndex + 1]
    }
  }

  setPrevActiveSentenceToken() {
    const currentIndex = this.#tokens.indexOf(this.#activeSentenceToken)
    if (currentIndex === 0) {
      this.#activeSentenceToken = this.#tokens[this.#tokens.length - 1]
    } else {
      this.#activeSentenceToken = this.#tokens[currentIndex - 1]
    }
  }
}
