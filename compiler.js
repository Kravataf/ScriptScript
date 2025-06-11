const fs = require('fs').promises;
let compiledSrc = "";

async function readFile(address) {
  try {
    if (!address.endsWith('.◕‿◕')) {
      console.error('Error: Only .◕‿◕ files are supported.');
      return;
    }

    const data = await fs.readFile(address, 'utf8');
    const lines = data.split(/\r?\n/);

    for (let line of lines) {
      const tokens = line.trim().split(/\s+/);

      if (
        tokens[0] === 'var' &&
        (tokens[2] === 'str' || tokens[2] === 'num') &&
        tokens[3] === '=' &&
        tokens.length >= 5
      ) {
        if (tokens[2] === 'str') {
          compiledSrc += `var ${tokens[1]} = "${tokens.slice(4).join(' ')}"; `;
        } else if (tokens[2] === 'num') {
          compiledSrc += `var ${tokens[1]} = ${tokens.slice(4).join(' ')}; `;
        }
      }
      else if (line.trim().startsWith('print(') && line.trim().endsWith(')')) {
        const inside = line.trim().slice(6, -1);
        compiledSrc += `console.log(${inside}); `;
      }
    }

    const formattedSrc = compiledSrc
      .split(';')
      .map(s => s.trim())
      .filter(s => s.length > 0)
      .join(';\n') + ';';

    console.log('Compiled Source:\n\n' + formattedSrc);
  } catch (err) {
    console.error(err);
  }
}

readFile('C:/Users/creat/Downloads/example.◕‿◕');