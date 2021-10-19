import { Document } from '../parser/document.js'

export class PrettyPrinter {
  #document = new Document()

  start(input) {
    this.#document.parse(input)
    this.#printDocument()
  }

  #printDocument() {
    const sentences = this.#getSentences()
    console.log(sentences)
  }

  #getSentences() {
    return this.#document.getAllSentences()
  }
}