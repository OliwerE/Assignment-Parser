import { Sentences } from "../src/parser/sentences.js";

export const tc1 = () => {
  const sentences = new Sentences()
  sentences.startCreateSentences('a. b? c!')
  const s = sentences.getSentences()
  const s1 = s[0].getSentenceString()
  const s2 = s[1].getSentenceString()
  const s3 = s[2].getSentenceString()

  if (s.length === 3 && s1 === 'a.' && s2 === 'b?' && s3 === 'c!') {
    return true
  } else {
    return false
  }
}