const request = require("request");

request(
  "https://www.google.com/search?q=living+waters&oq=living+waters&aqs=chrome.0.69i59l2j0i433j46i175i199l2j0j69i60l2.1782j0j7&sourceid=chrome&ie=UTF-8",
  function (error, response, body) {
    console.log(body);
  }
);
