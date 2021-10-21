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
    return {
      tokenType: 'SENTENCES',
      value: this.#sentences
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
    return [...this.#documentTokens[0].value.getSentences()]
  }

  getAllDotSentences() {
    const dotSentences = this.#findSpecificSentenceType('DOT')
    return dotSentences
  }

  #findSpecificSentenceType(sentenceType) {
    const foundSentences = []
    const sentencesTokenValue = this.#documentTokens[0].value
    const sentencesLength = sentencesTokenValue.getSentences().length

    for (let i = 0; i < sentencesLength; i++) {
      const sentence = sentencesTokenValue.getSentences()
      if (sentence[i].getEndType() === sentenceType) {
        foundSentences.push(sentence[i])
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
