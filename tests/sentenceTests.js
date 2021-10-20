import { Sentence } from "../src/parser/sentence.js"

export const tc1 = () => {
  const t1 = { tokenType: 'WORD', value: 'En' }
  const t2 = { tokenType: 'WORD', value: 'mening' } 
  const t3 = { tokenType: 'DOT', value: '.' }

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
  const t1 = { tokenType: 'WORD', value: 'En' }
  const t2 = { tokenType: 'WORD', value: 'mening' } 
  const t3 = { tokenType: 'QUESTION', value: '?' }

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
  const t1 = { tokenType: 'WORD', value: 'En' }
  const t2 = { tokenType: 'WORD', value: 'mening' } 
  const t3 = { tokenType: 'EXCLAMATION', value: '!' }

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
  const t1 = { tokenType: 'WORD', value: 'En' }
  const t2 = { tokenType: 'WORD', value: 'mening' } 
  const t3 = { tokenType: 'DOT', value: '.' }

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
  const t1 = { tokenType: 'WORD', value: 'a' }
  const t2 = { tokenType: 'QUESTION', value: '?' }
  const t3 = { tokenType: 'WORD', value: 'b' }
  const t4 = { tokenType: 'EXCLAMATION', value: '!' }
  const t5 = { tokenType: 'WORD', value: 'c' }
  const t6 = { tokenType: 'DOT', value: '.' }

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
  const t1 = { tokenType: 'WORD', value: 'En' }
  const t2 = { tokenType: 'WORD', value: 'mening' } 
  const t3 = { tokenType: 'QUESTION', value: '?' }

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
  const t1 = { tokenType: 'WORD', value: 'a' }
  const t2 = { tokenType: 'DOT', value: '.' }
  const t3 = { tokenType: 'WORD', value: 'b' }
  const t4 = { tokenType: 'EXCLAMATION', value: '!' }
  const t5 = { tokenType: 'WORD', value: 'c' }
  const t6 = { tokenType: 'QUESTION', value: '?' }

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
  const t1 = { tokenType: 'WORD', value: 'En' }
  const t2 = { tokenType: 'WORD', value: 'mening' } 
  const t3 = { tokenType: 'EXCLAMATION', value: '!' }

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
  const t1 = { tokenType: 'WORD', value: 'a' }
  const t2 = { tokenType: 'DOT', value: '.' }
  const t3 = { tokenType: 'WORD', value: 'b' }
  const t4 = { tokenType: 'QUESTION', value: '?' }
  const t5 = { tokenType: 'WORD', value: 'c' }
  const t6 = { tokenType: 'EXCLAMATION', value: '!' }

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
  const t1 = { tokenType: 'WORD', value: 'En' }
  const t2 = { tokenType: 'WORD', value: 'mening' } 
  const t3 = { tokenType: 'DOT', value: '.' }

  const sentence = new Sentence()
  sentence.addToken(t1)
  sentence.addToken(t2)
  sentence.addToken(t3)

  sentence.setNextActiveSentenceToken()

  const activeToken = sentence.getActiveSentenceToken()
  if (activeToken.tokenType === 'WORD' && activeToken.value === 'mening') {
    return true
  } else {
    return false
  }
}

export const tc11 = () => {
  const t1 = { tokenType: 'WORD', value: 'En' }
  const t2 = { tokenType: 'WORD', value: 'mening' } 
  const t3 = { tokenType: 'DOT', value: '.' }

  const sentence = new Sentence()
  sentence.addToken(t1)
  sentence.addToken(t2)
  sentence.addToken(t3)

  sentence.setNextActiveSentenceToken()
  sentence.setPrevActiveSentenceToken()

  const activeToken = sentence.getActiveSentenceToken()
  if (activeToken.tokenType === 'WORD' && activeToken.value === 'En') {
    return true
  } else {
    return false
  }
}

export const tc12 = () => {
  const t1 = { tokenType: 'WORD', value: 'En' }
  const t2 = { tokenType: 'WORD', value: 'mening' } 
  const t3 = { tokenType: 'DOT', value: '.' }

  const sentence = new Sentence()
  sentence.addToken(t1)
  sentence.addToken(t2)
  sentence.addToken(t3)

  sentence.setPrevActiveSentenceToken()

  const activeToken = sentence.getActiveSentenceToken()
  if (activeToken.tokenType === 'DOT' && activeToken.value === '.') {
    return true
  } else {
    return false
  }
}

export const tc13 = () => {
  const t1 = { tokenType: 'WORD', value: 'En' }
  const t2 = { tokenType: 'WORD', value: 'mening' } 
  const t3 = { tokenType: 'DOT', value: '.' }

  const sentence = new Sentence()
  sentence.addToken(t1)
  sentence.addToken(t2)
  sentence.addToken(t3)

  sentence.setNextActiveSentenceToken()
  sentence.setNextActiveSentenceToken()
  sentence.setNextActiveSentenceToken()

  const activeToken = sentence.getActiveSentenceToken()
  if (activeToken.tokenType === 'WORD' && activeToken.value === 'En') {
    return true
  } else {
    return false
  }
}

export const tc14 = () => {
  const t1 = { tokenType: 'WORD', value: 'En' }
  const t2 = { tokenType: 'WORD', value: 'mening' } 
  const t3 = { tokenType: 'DOT', value: '.' }

  const sentence = new Sentence()
  sentence.addToken(t1)
  sentence.addToken(t2)
  sentence.addToken(t3)

  sentence.setPrevActiveSentenceToken()
  sentence.setPrevActiveSentenceToken()
  sentence.setPrevActiveSentenceToken()

  const activeToken = sentence.getActiveSentenceToken()
  if (activeToken.tokenType === 'WORD' && activeToken.value === 'En') {
    return true
  } else {
    return false
  }
}