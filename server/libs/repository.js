const fsPromises = require('fs').promises;
const utf8 = 'utf8';
const { errorCode } = require('./error');

// class to access read & write to json file
class Repository {
  _path;

  constructor(fileName) {
    this._path = `./data_access/${fileName}.json`;
  }

  async read() {
    return fsPromises.readFile(this._path, { encoding: utf8 }).then((file) => {
      return JSON.parse(file);
    }).catch(err => {
      console.error(errorCode.JSON_READ_ERROR, err);
      throw new Error(errorCode.JSON_READ_ERROR);
    })
  }

  async write(payload) {
    const file = JSON.stringify(payload);

    return fsPromises.writeFile(this._path, file, { encoding: utf8 }).catch(err => {
      console.error(errorCode.JSON_READ_ERROR, err);
      throw new Error(errorCode.JSON_WRITE_ERROR);
    })
  }
}

module.exports = {
  Repository
}