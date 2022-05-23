const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'text.txt'); 
let rStream = fs.ReadStream(filePath, {encoding: 'utf-8'});

rStream.on('readable', function(){
  const data = rStream.read();
  if(data != null)console.log(data);
});
 