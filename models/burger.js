// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    console.log("modelburger",objColVals,condition);
    orm.update("burgers",{devoured:true},condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;

// const express = require('express');

// const Router = express.Router();
// const mysqlConnection = require('../config/connection');
// Router.get('/', (req, res) => {
//   mysqlConnection.query('SELECT * from burgers', (err, rows, fields) => {
//     if (!err) {
//       res.send(rows);
//     } else {
//       console.log(err);
//     }
//   });
// });
// module.exports = Router;
