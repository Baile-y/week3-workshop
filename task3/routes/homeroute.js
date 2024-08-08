const path = require('path');

module.exports = {
  route: (app) => {
    app.get('/', (req, res) => {
      let filepath = path.resolve('./views/form.html');
      res.sendFile(filepath);
    });
  }
};