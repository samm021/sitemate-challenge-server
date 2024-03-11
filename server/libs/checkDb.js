const fs = require('fs');
const fsPromises = fs.promises;
const utf8 = 'utf8';

async function checkDb(fileNames) {
  for (let fileName of fileNames) {
    const filePath = `./data_access/${fileName}.json`;

    if (!fs.existsSync(filePath)) {
      await fsPromises.writeFile(filePath, JSON.stringify([]), { encoding: utf8 }).catch(err => {
        console.error(err)
        process.exit(0);
      });
    }
  }

  return;
}

module.exports = {
  checkDb
}