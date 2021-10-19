import { Sentences } from "./sentences.js"

export class Document {
  #sentences = new Sentences()

  parse(input) {
    this.#sentences.startCreateSentences(input)
  }

  getSentences() {
    return this.#sentences.getSentences()
  }

  /*
  getAllSentencesTypes() {

  }

  getAllDotSentences() {
    
  }

  getAllQuestionSentences() {

  }

  getAllExclamationSentences() {

  }
  */

}
