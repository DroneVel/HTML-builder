const fs = require('fs');
const readline = require('readline');
const path = require('path');
let filepath = path.resolve(__dirname, 'text.txt');

console.log('Text:');
let rl = readline.createInterface(process.stdin, process.stdout);
rl.prompt();
rl.on('line', function(line) {
  if (line === 'exit') {
    rl.close();
    console.log('Goodbye!');
  }
  fs.appendFile(`${filepath}`, `${line}`, function(error){
    if(error) throw error;
  });
  rl.prompt();
}).on('close',function(){
  console.log('Goodbye!');
  process.exit(0);
});