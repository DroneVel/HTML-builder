const fs = require('fs');
const path = require('path');
const { readdir } = require('fs/promises');
const folderStyle = path.join(__dirname, 'styles');
const projectDist = path.join(__dirname, 'project-dist');
const fileName = path.join(projectDist, 'bundle.css');
const writeStream = fs.createWriteStream(fileName, 'utf8');

async function readDir() {
  try {
  const files = await readdir(folderStyle, { withFileTypes: true });

    for(const file of files) {
      fs.stat(path.join(folderStyle, file.name), (err, stats) => {
        if(err) console.log(err);
        else if(!stats.isDirectory()) {
          const extname = path.extname(file.name);
          if(extname === '.css') {
            fs.readFile(path.join(folderStyle, file.name), (err, data) => {
              if(err) throw err;
              writeStream.write(data);
            });
          }
        }
      });
    }
  } catch(err) {
    console.error(err);
  }
}
readDir();