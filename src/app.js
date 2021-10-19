import { Document } from "./parser/document.js"

const document = new Document()

const string = 'Meningen består av ord. Det gör även denna meningen.'
document.parse(string)
