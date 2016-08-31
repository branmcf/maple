var promise = require('bluebird');

var options = {
	// Initialization Options
	promiseLib: promise
};

var pgp = require('pg-promise')(options);
var config = {
	host: 'ec2-54-221-225-43.compute-1.amazonaws.com',
	port: 5432,
	database: 'd47cpr1n42gt7a',
	user: 'jdwvjhzufdscyl',
	password: 'z_yWhxmMJlhBm_hgyUrul1tH1F',
	ssl: true
};

var db = pgp(config);

module.exports = {
	getAllUsers: getAllUsers
};

function getAllUsers(req, res, next) {
  db.any('select * from pups')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL puppies'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}