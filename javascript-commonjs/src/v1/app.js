const bodyParser = require('body-parser');
const { Version } = require('express-custom');

const userGroup = require('./routes');

const version = new Version({
  version: 1,
});

version.addMiddleware(bodyParser.json());
version.addMiddleware(bodyParser.urlencoded());

version.addGroup(userGroup);

module.exports = version;
