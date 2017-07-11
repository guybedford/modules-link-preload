const fs = require('fs');

for (let i = 1; i < 1000; i++) {
  if (i === 999)
    fs.writeFileSync(`lib/module${i}.js`, `export var x = 5;`);
  else
    fs.writeFileSync(`lib/module${i}.js`, `export {x} from './module${i + 1}.js';`);
}
