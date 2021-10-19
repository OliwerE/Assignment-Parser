import { PrettyPrinter } from "./prettyPrinter/prettyPrinter.js"

const prettyPrinter = new PrettyPrinter()

const input = 'Detta är en mening. Är det? JA! Men nu fungerar det? verkar så. mycket bra.'

prettyPrinter.start(input)