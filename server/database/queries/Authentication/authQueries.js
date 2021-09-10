const connection = require("../../config/connection");

const logInQuery = (username) =>
  connection.query(`SELECT * FROM users WHERE users=$1 `, [username.usersname]);

const signUpQuery = ({name, username, email, password}) =>
  connection.query(
    `INSERT INTO users (name,username,email,password) VALUES ($1,$2,$3,$4)`,
    [name, username, email, password]
  );

  module.exports ={
      logInQuery,
      signUpQuery,
  }