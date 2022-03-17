var models = require('../models');

module.exports = {
  get: function (req, res) {

    models.messages.getAll((err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        console.log(results);
        res.send(results);
      }
    });
  },
  // a function which handles a get request for all messages
  // need all the messages
  post: function (req, res) {

    models.messages.create(req.body, function (err, postMessage) {
      if (err) {
        res.status(404).send(err);
      } else {
        res.send(postMessage);
      }
    });
  }
};



// server/controllers/messages.js