## Instruktioner

## Hur parser används med prettyPrinter
* Skapa en app.js modul i /src
* Importera PrettyPrinter:
```javascript
import { PrettyPrinter } from "./prettyPrinter/prettyPrinter.js"
```
* Skapa en ny prettyPrinter instans:
```javascript
import { PrettyPrinter } from "./prettyPrinter/prettyPrinter.js"

const prettyPrinter = new PrettyPrinter()
```
* Starta parsern genom att skicka en sträng till startmetoden:
```javascript
import { PrettyPrinter } from "./prettyPrinter/prettyPrinter.js"

const prettyPrinter = new PrettyPrinter()

const input = 'Detta är en mening. Är det? JA!'

prettyPrinter.start(input)
```
* Resultatet visas i terminalen.