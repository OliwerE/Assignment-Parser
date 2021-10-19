// import { Document } from "./parser/document.js"
import { PrettyPrinter } from "./prettyPrinter/prettyPrinter.js"


const prettyPrinter = new PrettyPrinter()

const input = 'Detta är en mening. Är det? JA!'

prettyPrinter.start(input)


/*

 * Bugg: två meningar med samma slut token (.?!) efter varabdra blir oändlig loop.
 * Även om de inte är efter varandra!

*/