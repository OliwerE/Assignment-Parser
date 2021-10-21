import * as sentenceTests from './sentenceTests.js'
import * as sentencesTests from './sentencesTests.js'
import * as documentTests from './documentTests.js'

const runParserAndPrinterTests = () => {

  console.log('----- Sentence Tests -----')
  console.table({ 'tc1: Returnera mening': {
    Indata: '"En mening."',
    Input: '-',
    Förväntat: '"En mening."',
    Resultat: (sentenceTests.tc1() ? 'PASS' : 'FAIL')
  },
  'tc2: Returnera en fråga': {
    Indata: '"En mening?"',
    Input: '-',
    Förväntat: '"En mening?"',
    Resultat: (sentenceTests.tc2() ? 'PASS' : 'FAIL')
  },
  'tc3: Returnera ett utrop': {
    Indata: '"En mening!"',
    Input: '-',
    Förväntat: '"En mening!"',
    Resultat: (sentenceTests.tc3() ? 'PASS' : 'FAIL')
  },
  'tc4: Få end token typ DOT': {
    Indata: '"En mening."',
    Input: '-',
    Förväntat: '"DOT"',
    Resultat: (sentenceTests.tc4() ? 'PASS' : 'FAIL')
  },
  'tc5: Få end token typ DOT': {
    Indata: '"a? b! c."',
    Input: '-',
    Förväntat: '"DOT"',
    Resultat: (sentenceTests.tc5() ? 'PASS' : 'FAIL')
  },
  'tc6: Få end token typ QUESTION': {
    Indata: '"En mening?',
    Input: '-',
    Förväntat: '"QUESTION"',
    Resultat: (sentenceTests.tc6() ? 'PASS' : 'FAIL')
  },
  'tc7: Få end token typ QUESTION': {
    Indata: '"a. b! c?"',
    Input: '-',
    Förväntat: '"QUESTION"',
    Resultat: (sentenceTests.tc6() ? 'PASS' : 'FAIL')
  },
  'tc8: Få end token typ EXCLAMATION': {
    Indata: '"En mening!"',
    Input: '-',
    Förväntat: '"EXCLAMATION"',
    Resultat: (sentenceTests.tc8() ? 'PASS' : 'FAIL')
  },
  'tc9: Få end token typ EXCLAMATION': {
    Indata: '"a. b? c!"',
    Input: '-',
    Förväntat: '"EXCLAMATION"',
    Resultat: (sentenceTests.tc9() ? 'PASS' : 'FAIL')
  },
  'tc10: Stega till nästa token': {
    Indata: '"En mening."',
    Input: '>',
    Förväntat: 'värde: "mening", typ: "WORD"',
    Resultat: (sentenceTests.tc10() ? 'PASS' : 'FAIL')
  },
  'tc11: Stega fram sedan tillbaks token': {
    Indata: '"En mening."',
    Input: '><',
    Förväntat: 'värde: "En", typ: "WORD"',
    Resultat: (sentenceTests.tc11() ? 'PASS' : 'FAIL')
  },
  'tc12: Stega bakåt till sista token': {
    Indata: '"En mening."',
    Input: '<',
    Förväntat: 'värde: ".", typ: "DOT"',
    Resultat: (sentenceTests.tc12() ? 'PASS' : 'FAIL')
  },
  'tc13: Stega fram tills första token är aktiv igen': {
    Indata: '"En mening."',
    Input: '>>>',
    Förväntat: 'värde: "En", typ: "WORD"',
    Resultat: (sentenceTests.tc13() ? 'PASS' : 'FAIL')
  },
  'tc14: Stega bakåt tills första token är aktiv igen': {
    Indata: '"En mening."',
    Input: '<<<',
    Förväntat: 'förv',
    Resultat: (sentenceTests.tc14() ? 'PASS' : 'FAIL')
  }
  })

  console.log('\n----- Sentences Tests -----')
  console.table({ 'tc1: Returnera alla meningar': {
      Indata: '"a. b? c!"',
      Förväntat: 'Array med tre meningar: a., b? och c!',
      Resultat: (sentencesTests.tc1() ? 'PASS' : 'FAIL')
    }
  })

  console.log('\n----- Document Tests -----')
  console.table({ 'tc1: Returnera alla meningar': {
      Indata: '"a! b? c. d? e! f."',
      Förväntat: 'Array som innehåller meningarna: a!, b?, c., d?, e!, f.',
      Resultat: (documentTests.tc1() ? 'PASS' : 'FAIL')
    },
    'tc2: Returnera alla meningar med punkt': {
      Indata: '"a! b? c. d? e! f."',
      Förväntat: 'Array som innehåller meningarna: c., f.',
      Resultat: (documentTests.tc2() ? 'PASS' : 'FAIL')
    },
    'tc3: Returnera alla frågor': {
      Indata: '"a! b? c. d? e! f."',
      Förväntat: 'Array som innehåller meningarna: b?, d?',
      Resultat: (documentTests.tc3() ? 'PASS' : 'FAIL')
    },
    'tc4: Returnera alla meningar med utropstecken': {
      Indata: '"a! b? c. d? e! f."',
      Förväntat: 'Array som innehåller meningarna: a!, e!',
      Resultat: (documentTests.tc4() ? 'PASS' : 'FAIL')
    }
  })

  console.log('\n----- Pretty Printer Tests -----')
  console.log('Manuella tester finns i README.md')
}
runParserAndPrinterTests()
