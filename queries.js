var mongodb = require("mongodb");

module.exports = {
	getAllUsers: getAllUsers,
  createUser: createUser
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
  console.log(req.body);
  var newUser = req.body;
  newUser.time_joined = new Date();
  newUser.user_rating = 0.0;
  var random_user_id = Math.random().toString(36).slice(2);
  newUser.user_id = random_user_id;
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