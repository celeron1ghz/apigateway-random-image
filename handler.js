'use strict';

module.exports.main = (event, context, callback) => {
  const response = { statusCode: 302, location: 'http://google.com/' };
  callback(null, response);
};
