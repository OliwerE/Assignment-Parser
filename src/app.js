import { Document } from "./parser/document.js"

const document = new Document()

const string = 'Meningen består av ord. Det gör även denna meningen.'
const string2 = 'Meningen består. Gör den?'
const string3 = 'Meningen består.'
document.parse(string2)

/*

 * Bugg: två meningar med samma slut token (.?!) efter varabdra blir oändlig loop.

*/