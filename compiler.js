const fs = require('fs').promises;
let splitData = [];
let compiledSrc = "";

async function readFile(address) {
  try {
    const data = await fs.readFile(address, 'utf8');
    splitData = data.split(/\s+/); // Split by any whitespace (space, tab, newline)
    console.log(splitData);

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
        case "str":
            break;
        case "num":
            break;
        case "print":
            compiledSrc += "console.log()";
            break;
        default:
            compiledSrc += splitData[i] + " ";
            break;
        }
    }
    console.log("Compiled Source: ", compiledSrc);
  } catch (err) {
    console.error(err);
  }
}

readFile('C:/Users/creat/Downloads/example.ss');
