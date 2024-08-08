const path = require('path');

module.exports = {
  route: (app) => {
    app.get('/account', (req, res) => {
      let filepath = path.resolve('./views/account.html');
      res.sendFile(filepath);
    });
  }
};
