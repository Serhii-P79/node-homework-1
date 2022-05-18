const fs = require("fs/promises");
const db = require("../db");

const updateContactsDB = async (contacts) => {
  try {
    await fs.writeFile(db.filePath, JSON.stringify(contacts));
  } catch (error) {
    console.error("there was an error:", error.message);
    throw new Error(`there was an error: ${error.message}`);
  }
};

module.exports = updateContactsDB;
