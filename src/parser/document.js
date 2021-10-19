import { Sentences } from "./sentences.js"

export class Document {
  #documentTokens = []
  #sentences = new Sentences()

  parse(input) {
    this.#sentences.startCreateSentences(input)
    this.#addTokens()
  }

  #addTokens() {
    const sentencesToken = this.#createSentencesToken()
    this.#addDocumentToken(sentencesToken)

    const endToken = this.#createEndToken()
    this.#addDocumentToken(endToken)
  }

  #createSentencesToken() {
    const sentence = this.#sentences.getSentences()
    return {
      tokenType: 'SENTENCES',
      value: sentence
    }
  }

  #addDocumentToken(token) {
    this.#documentTokens.push(token)
  }

  #createEndToken() {
    return {
      tokenType: 'END',
      value: ''
    }
  }

  getAllSentences() {
    return [...this.#documentTokens[0].value]
  }

  getAllDotSentences() {
    const dotSentences = this.#findSpecificSentenceType('DOT')
    return dotSentences
  }

  #findSpecificSentenceType(sentenceType) {
    const foundSentences = []
    const sentencesLength = this.#documentTokens[0].value.length
    for (let i = 0; i < sentencesLength; i++) {
      if (this.#documentTokens[0].value[i].getEndType() === sentenceType) {
        foundSentences.push(this.#documentTokens[0].value[i])
      }
    }
    return foundSentences
  }

  getAllQuestionSentences() {
    const questionSentences = this.#findSpecificSentenceType('QUESTION')
    return questionSentences
  }

  getAllExclamationSentences() {
    const exclamationSentences = this.#findSpecificSentenceType('EXCLAMATION')
    return exclamationSentences
  }
}
