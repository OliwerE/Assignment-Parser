import { Document } from '../parser/document.js'

export class PrettyPrinter {
  #document = new Document()

  start(input) {
    try {
      this.#document.parse(input)
      this.#setupPrintDocument()
    } catch (err) {
      console.error(err.message)
    }
  }

  #setupPrintDocument() {
    const sentences = this.#getSentences()
    this.#printDocument(sentences)
  }

  #getSentences() {
    return this.#document.getAllSentences()
  }

  #printDocument(sentences) {
    for (let i = 0; i < sentences.length; i++) {
      if (sentences[i].getEndType() === 'DOT') {
        this.#printDotSentence(i, sentences[i])
      } else if (sentences[i].getEndType() === 'QUESTION') {
        this.#printQuestionSentence(i, sentences[i])
      } else if (sentences[i].getEndType() === 'EXCLAMATION') {
        this.#printExclamationSentence(i, sentences[i])
      } else {
        throw new Error(`${sentences[i].getEndType()} is not a valid end type.`)
      }
    }
  }

  #printDotSentence(index, sentence) {
    console.log(`${index}. ` + '\x1b[32m' + sentence.getSentenceString() + '\x1b[0m') // green
  }

  #printQuestionSentence(index, sentence) {
    console.log(`${index}. ` + '\x1b[31m' + sentence.getSentenceString() + '\x1b[0m') // red
  }

  #printExclamationSentence(index, sentence) {
    console.log(`${index}. ` +  '\x1b[4m' + sentence.getSentenceString() + '\x1b[0m') // underscore
  }
}
