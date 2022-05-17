const fs = require('fs/promises');
const db = require('../db');

const updateContactsDB = async contacts => {
  await fs.writeFile(db.filePath, JSON.stringify(contacts));
};

module.exports = updateContactsDB;
