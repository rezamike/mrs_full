const connection = require("./connection.js");

const orm = {
  all: (table, cb) => {
    var queryString = `SELECT * FROM ${table};`;
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  create: (table, cols, vals, cb) => {
    var queryString = `INSERT INTO ${table} (${cols}) VALUES (${vals});`;
    console.log(queryString);
    connection.query(queryString, vals, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
};

module.exports = orm;
