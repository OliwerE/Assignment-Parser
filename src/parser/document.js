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
    // fix
  }

  getAllQuestionSentences() {
    // fix
  }

  getAllExclamationSentences() {
    // fix
  }

}
