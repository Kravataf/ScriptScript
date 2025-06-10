const fs = require('fs').promises;
let splitData = [];
let compiledSrc = "";

async function readFile(address) {
  try {
    const data = await fs.readFile(address, 'utf8');
    splitData = data.split(/\s+/); // Split by any whitespace (space, tab, newline)

    for (let i in splitData) {
      switch (splitData[i]) {
        case 'var':
            console.log(`Found 'var' at index ${i}`);
            break;
        case 'str':
            console.log(`Found 'str' at index ${i}`);
            break;
        case '=':
            console.log(`Found '=' at index ${i}`);
            break;
        case 'print':
            console.log(`Found 'print' at index ${i}`);
            break;
      }
      switch (splitData[i]) {
        // don't print types
        case "str":
            break;
        case "num":
            break;
        default:
            if (splitData[i].startsWith("print(")) {
                compiledSrc += "console.log()";
            } else {
                compiledSrc += splitData[i] + " ";
            }
            break;
      }
    }
    console.log("Compiled Source: ", compiledSrc);
  } catch (err) {
    console.error(err);
  }
}

readFile('C:/Users/creat/Downloads/example.ss');
