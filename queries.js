var mongodb = require("mongodb");

module.exports = {
	getAllUsers: getAllUsers,
  createUser: createUser,
  getUser: getUser
};

var db;

function getAllUsers(req, res, next) {
  mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, db) {
    db.collection("users").find({}).toArray(function(err, docs) {
      if (err) {
        handleError(res, err.message, "Failed to get users.");
      } else {
        res.status(200).json(docs);
      }
    })
  });
}

function createUser(req, res) {
  var newUser = req.body;
  newUser.time_joined = new Date();
  newUser.user_rating = 0.0;
  mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, db) {
    db.collection("users").insertOne(newUser, function(err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to create new contact.");
      } else {
        res.status(201).json(doc.ops[0]);
      }
    });
  });
}

function getUser(req, res) {
  var user_id = req.params.id;
  mongodb.MongoClient.connect("mongodb://heroku_54tn5qdb:qveck2o5r9939ml2ql27ng1qv@ds019756.mlab.com:19756/heroku_54tn5qdb", function (err, db) {
    db.collection("users").find({"user_id" : user_id}).toArray(function(err, docs) {
      if (err) {
        handleError(res, err.message, "Failed to get specific user.");
      } else {
        res.status(200).json(docs);
      }
    });
  });
}