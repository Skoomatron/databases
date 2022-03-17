var db = require('../db');

module.exports = {
  // get requests
  getAll: function (callback) {
    db.query(
      'select * from messages',
      function(err, results, fields) {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      }
    );
  }, // a function which produces all the messages

  create: function (id, username, message, githandle, room, chatMessage) {
    // post request
    db.query(
      'insert into messages (ID, userName, searchText, gitHandle, roomname, chatMessage) values ("' + id + '", "' + username + '", "' + message + '", "' + githandle + '", "' + room + '", "' + chatMessage + '")',

      function(err, results, fields) {
        if (err) {
          console.error('Invalid Entry');
        } else {
          return results;
        }
      }
    );
  } // a function which can be used to insert a message into the database
};
// module.exports.getAll();


