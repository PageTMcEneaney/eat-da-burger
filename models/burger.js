var orm = require("../config/orm.js");

var burgers = {
    all: function(cb) {
        orm.all("burgers", function(res) {
          cb(res);
        });
      },
}
// Export the database functions for the controller (catsController.js).
module.exports = burgers;