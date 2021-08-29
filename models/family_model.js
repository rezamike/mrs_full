const orm = require("../config/orm.js");

const family = {
  all: (cb) => {
    orm.all("user", (res) => {
      cb(res);
    });
  },
  create: (value, cb) => {
    orm.create("user", "Name, Email", value, cb);
  }
};

module.exports = family;
