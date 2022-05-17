const fs = require('fs/promises');
const db = require('../db');

const listContacts = async () => {
  const data = await fs.readFile(db.filePath);
  const contacts = JSON.parse(data);
  return contacts;
};

module.exports = listContacts;
