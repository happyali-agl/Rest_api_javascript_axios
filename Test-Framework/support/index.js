require('dotenv').config();
const addContext = require('mochawesome/addContext');


// Log to Mochawesome
function report(test, heading, body) {
    addContext(test, {
      title: heading,
      value: body
    });
  }
  
  module.exports = {
    report
  };