import { Sentence } from "../src/parser/sentence.js"
import { Token } from "../src/tokenizer/token.js"

export const tc1 = () => {
  const t1 = new Token('WORD', 'En')
  const t2 = new Token('WORD', 'mening')
  const t3 = new Token('DOT', '.')

  const sentence = new Sentence()
  sentence.addToken(t1)
  sentence.addToken(t2)
  sentence.addToken(t3)

  const string = sentence.getSentenceString()
  if (string === 'En mening.') {
    return true
  } else {
    return false
  }
}

export const tc2 = () => {
  const t1 = new Token('WORD', 'En')
  const t2 = new Token('WORD', 'mening')
  const t3 = new Token('QUESTION', '?')

  const sentence = new Sentence()
  sentence.addToken(t1)
  sentence.addToken(t2)
  sentence.addToken(t3)

  const string = sentence.getSentenceString()
  if (string === 'En mening?') {
    return true
  } else {
    return false
  }
}

export const tc3 = () => {
  const t1 = new Token('WORD', 'En')
  const t2 = new Token('WORD', 'mening')
  const t3 = new Token('EXCLAMATION', '!')

  const sentence = new Sentence()
  sentence.addToken(t1)
  sentence.addToken(t2)
  sentence.addToken(t3)

  const string = sentence.getSentenceString()
  if (string === 'En mening!') {
    return true
  } else {
    return false
  }
}

export const tc4 = () => {
  const t1 = new Token('WORD', 'En')
  const t2 = new Token('WORD', 'mening')
  const t3 = new Token('DOT', '.')

  const sentence = new Sentence()
  sentence.addToken(t1)
  sentence.addToken(t2)
  sentence.addToken(t3)

  const endType = sentence.getEndType()
  if (endType === 'DOT') {
    return true
  } else {
    return false
  }
}

export const tc5 = () => {
  const t1 = new Token('WORD', 'a')
  const t2 = new Token('QUESTION', '?')
  const t3 = new Token('WORD', 'b')
  const t4 = new Token('EXCLAMATION', '!')
  const t5 = new Token('WORD', 'c')
  const t6 = new Token('DOT', '.')

  const sentence = new Sentence()
  sentence.addToken(t1)
  sentence.addToken(t2)
  sentence.addToken(t3)
  sentence.addToken(t4)
  sentence.addToken(t5)
  sentence.addToken(t6)


  const endType = sentence.getEndType()
  if (endType === 'DOT') {
    return true
  } else {
    return false
  }
}

export const tc6 = () => {
  const t1 = new Token('WORD', 'En')
  const t2 = new Token('WORD', 'mening')
  const t3 = new Token('QUESTION', '?')

  const sentence = new Sentence()
  sentence.addToken(t1)
  sentence.addToken(t2)
  sentence.addToken(t3)

  const endType = sentence.getEndType()
  if (endType === 'QUESTION') {
    return true
  } else {
    return false
  }
}

export const tc7 = () => {
  const t1 = new Token('WORD', 'a')
  const t2 = new Token('DOT', '.')
  const t3 = new Token('WORD', 'b')
  const t4 = new Token('EXCLAMATION', '!')
  const t5 = new Token('WORD', 'c')
  const t6 = new Token('QUESTION', '?')

  const sentence = new Sentence()
  sentence.addToken(t1)
  sentence.addToken(t2)
  sentence.addToken(t3)
  sentence.addToken(t4)
  sentence.addToken(t5)
  sentence.addToken(t6)

  const endType = sentence.getEndType()
  if (endType === 'QUESTION') {
    return true
  } else {
    return false
  }
}

export const tc8 = () => {
  const t1 = new Token('WORD', 'En')
  const t2 = new Token('WORD', 'mening')
  const t3 = new Token('EXCLAMATION', '!')

  const sentence = new Sentence()
  sentence.addToken(t1)
  sentence.addToken(t2)
  sentence.addToken(t3)

  const endType = sentence.getEndType()
  if (endType === 'EXCLAMATION') {
    return true
  } else {
    return false
  }
}

export const tc9 = () => {
  const t1 = new Token('WORD', 'a')
  const t2 = new Token('DOT', '.')
  const t3 = new Token('WORD', 'b')
  const t4 = new Token('QUESTION', '?')
  const t5 = new Token('WORD', 'c')
  const t6 = new Token('EXCLAMATION', '!')

  const sentence = new Sentence()
  sentence.addToken(t1)
  sentence.addToken(t2)
  sentence.addToken(t3)
  sentence.addToken(t4)
  sentence.addToken(t5)
  sentence.addToken(t6)

  const endType = sentence.getEndType()
  if (endType === 'EXCLAMATION') {
    return true
  } else {
    return false
  }
}

export const tc10 = () => {
  const t1 = new Token('WORD', 'En')
  const t2 = new Token('WORD', 'mening')
  const t3 = new Token('DOT', '.')

  const sentence = new Sentence()
  sentence.addToken(t1)
  sentence.addToken(t2)
  sentence.addToken(t3)

  sentence.setNextActiveSentenceToken()
  
  const activeToken = sentence.getActiveSentenceToken()
  const tokenType = activeToken.getTokenType()
  const value = activeToken.getTokenValue()

  if (tokenType === 'WORD' && value === 'mening') {
    return true
  } else {
    return false
  }
}

export const tc11 = () => {
  const t1 = new Token('WORD', 'En')
  const t2 = new Token('WORD', 'mening')
  const t3 = new Token('DOT', '.')

  const sentence = new Sentence()
  sentence.addToken(t1)
  sentence.addToken(t2)
  sentence.addToken(t3)

  sentence.setNextActiveSentenceToken()
  sentence.setPrevActiveSentenceToken()

  const activeToken = sentence.getActiveSentenceToken()
  const tokenType = activeToken.getTokenType()
  const value = activeToken.getTokenValue()

  if (tokenType === 'WORD' && value === 'En') {
    return true
  } else {
    return false
  }
}

export const tc12 = () => {
  const t1 = new Token('WORD', 'En')
  const t2 = new Token('WORD', 'mening')
  const t3 = new Token('DOT', '.')

  const sentence = new Sentence()
  sentence.addToken(t1)
  sentence.addToken(t2)
  sentence.addToken(t3)

  sentence.setPrevActiveSentenceToken()

  const activeToken = sentence.getActiveSentenceToken()
  const tokenType = activeToken.getTokenType()
  const value = activeToken.getTokenValue()

  if (tokenType === 'DOT' && value === '.') {
    return true
  } else {
    return false
  }
}

export const tc13 = () => {
  const t1 = new Token('WORD', 'En')
  const t2 = new Token('WORD', 'mening')
  const t3 = new Token('DOT', '.')

  const sentence = new Sentence()
  sentence.addToken(t1)
  sentence.addToken(t2)
  sentence.addToken(t3)

  sentence.setNextActiveSentenceToken()
  sentence.setNextActiveSentenceToken()
  sentence.setNextActiveSentenceToken()

  const activeToken = sentence.getActiveSentenceToken()
  const tokenType = activeToken.getTokenType()
  const value = activeToken.getTokenValue()

  if (tokenType === 'WORD' && value === 'En') {
    return true
  } else {
    return false
  }
}

export const tc14 = () => {
  const t1 = new Token('WORD', 'En')
  const t2 = new Token('WORD', 'mening')
  const t3 = new Token('DOT', '.')

  const sentence = new Sentence()
  sentence.addToken(t1)
  sentence.addToken(t2)
  sentence.addToken(t3)

  sentence.setPrevActiveSentenceToken()
  sentence.setPrevActiveSentenceToken()
  sentence.setPrevActiveSentenceToken()

  const activeToken = sentence.getActiveSentenceToken()
  const tokenType = activeToken.getTokenType()
  const value = activeToken.getTokenValue()

  if (tokenType === 'WORD' && value === 'En') {
    return true
  } else {
    return false
  }
}