import { Document } from '../src/parser/document.js'

export const tc1 = () => {
  const d = new Document()
  d.parse('a! b? c. d? e! f.')
  const s = d.getAllSentences()

  if (s.length === 6 && s[0].getSentenceString() === 'a!' && s[1].getSentenceString() === 'b?' && s[2].getSentenceString() === 'c.' && s[3].getSentenceString() === 'd?' && s[4].getSentenceString() === 'e!' && s[5].getSentenceString() === 'f.') {
    return true
  } else {
    return false
  }
}

export const tc2 = () => {
  const d = new Document()
  d.parse('a! b? c. d? e! f.')
  const s = d.getAllDotSentences()

  if (s.length === 2 && s[0].getSentenceString() === 'c.' && s[1].getSentenceString() === 'f.') {
    return true
  } else {
    return false
  }
}

export const tc3 = () => {
  const d = new Document()
  d.parse('a! b? c. d? e! f.')
  const s = d.getAllQuestionSentences()

  if (s.length === 2 && s[0].getSentenceString() === 'b?' && s[1].getSentenceString() === 'd?') {
    return true
  } else {
    return false
  }
}

export const tc4 = () => {
  const d = new Document()
  d.parse('a! b? c. d? e! f.')
  const s = d.getAllExclamationSentences()

  if (s.length === 2 && s[0].getSentenceString() === 'a!' && s[1].getSentenceString() === 'e!') {
    return true
  } else {
    return false
  }
}

export const tc5 = () => {
  
}