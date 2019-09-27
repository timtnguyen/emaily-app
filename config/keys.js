// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === "production") {
  // we are in production - return the prod set of keys
  module.exports = require("./prod");
} else {
  // we are in development - return the dev keys
  module.exports = require("./dev");
}

// mongodb://timnguyen:password09@ds159661.mlab.com:59661/emaily-d

// mongodb+srv://thinhhuong:F0CjtUc7sAOodYCx@cluster0-lrsle.mongodb.net/test?retryWrites=true&w=majority
// F0CjtUc7sAOodYCx
