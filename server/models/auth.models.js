const query = require("../config/mysql.conf");
const bcrypt = require("bcrypt");

async function login(res, username, password) {
  //! Grab a user from the table with the provided username
  //! If there isn't one send an error back
  //! Compare provided password to hashed (from database)
  //! If they don't match, send an error back
  //! Otherwise send back the "sanitized" user
  //! Handle errors in catch block
}

async function signup(res, username, password) {
  //! Grab a user from the table with the provided username
  //! If there IS one send an error back
  //! Hash the plain text password
  //! Add the new user to the table
  //! Send back new user (with their insertId)
  //!
  //!
  //! Handle errors in catch block
}

module.exports = { login, signup };
