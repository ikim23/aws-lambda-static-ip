const request = require('request-promise-native');

module.exports.handler = (event, context, callback) => {
  request({
    method: 'GET',
    uri: process.env.URI,
  }).then((data) => {
    const { ip } = JSON.parse(data);
    const msg = `Your static ip address is: ${ip}`;
    console.log(msg);
    callback(null, {
      statusCode: 200,
      body: msg,
    });
  }).catch((err) => {
    console.error(err);
    callback(err);
  });
};
