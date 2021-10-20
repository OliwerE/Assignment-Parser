export class Sentence {
  #tokens = []
  #activeSentenceToken
  #currentTokenIndex = 0

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
    if (this.#currentTokenIndex === (this.#tokens.length - 1)) {
      this.#currentTokenIndex = 0
      this.#activeSentenceToken = this.#tokens[this.#currentTokenIndex]
    } else {
      this.#currentTokenIndex = this.#currentTokenIndex + 1
      this.#activeSentenceToken = this.#tokens[this.#currentTokenIndex]
    }
  }

  setPrevActiveSentenceToken() {
    if (this.#currentTokenIndex === 0) {
      this.#currentTokenIndex = this.#tokens.length - 1
      this.#activeSentenceToken = this.#tokens[this.#currentTokenIndex]
    } else {
      this.#currentTokenIndex = this.#currentTokenIndex - 1
      this.#activeSentenceToken = this.#tokens[this.#currentTokenIndex]
    }
  }
}
