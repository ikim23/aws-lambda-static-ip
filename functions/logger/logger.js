
module.exports.handler = (event, context, callback) => {
  const { sourceIp } = event;
  console.log(`Received request from ip: ${sourceIp}`);
  callback(null, {
    ip: sourceIp,
  });
};
