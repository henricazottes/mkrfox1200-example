// convert.js
const jsonServer = require('json-server')

module.exports = (req, res, next) => {
  console.log(req);
  console.log("====================================================================");
  console.log(res);
  console.log("====================================================================");
  console.log(next);
  next()
}
