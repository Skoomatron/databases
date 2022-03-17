var mysql = require('mysql2');


// module.exports = {connection: mysql.createConnection({
//   host: '3306',
//   user: 'root',
//   database: 'chat'
// })
// };

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'chat'
});

connection.connect(function(err) {
  if (err) {
    return console.error('Failed to connect!');
  }
  console.log('We in here!');
});

module.exports = connection;


//============= save for later ==============
// connection.end(function(err) {
//   if (err) {
//     return console.log('error:' + err.message);
//   }
//   console.log('Close the database connection.');
// });
//============================================

// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.


// On Campus at pairing stations you'll use
// user: 'student', password: 'student'
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'